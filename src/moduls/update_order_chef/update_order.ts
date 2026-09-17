import { Server } from 'socket.io'
import { updateOrderRepository } from './update_order.repository'
import { AuthRoleSocket } from '../../middleware/authRoleSocket'
import { updateOrderSchema } from './update_order_chef.schema'

type orderStatus = "READY" | "COOKING"

export const updateOrder = (io: Server) => {
    io.on("connection", (socket) => {
        
        const user = socket.data.user
        if (user.branchId !== null && user.role === "CHEF") {
            socket.join(`branch:${user.branchId}:CHEF`)
        }

        socket.on("update-state-chef", async (data) => {
            try {
                AuthRoleSocket(socket, "CHEF")
                const dataParsed = updateOrderSchema.safeParse(data)
                if (!dataParsed.success) {
                    socket.emit("socket-error", { message: "INVALID DATA" })
                    return
                }
                const orderId = dataParsed.data.id
                const currentState = dataParsed.data.state
                let newState: orderStatus = "COOKING"

                if (currentState === "PENDING") {
                    newState = "COOKING"
                } else if (currentState === "COOKING") {
                    newState = "READY"
                } else {
                    socket.emit("socket-error", { message: "INVALID STATE" })
                    return
                }

                const updated = await updateOrderRepository(orderId, user.branchId, newState, currentState)

                if (updated === 0) {
                    socket.emit("socket-error", { message: "COULD NOT UPDATE" })
                    return
                }

                if (newState === "READY") {
                    io.to(`branch:${user.branchId}:WAITRESS`).emit("new-order-waitress", { orderId, newState })
                }

                io.to(`branch:${user.branchId}:CHEF`).emit("order-updated-chef", { orderId, newState })
            } catch (error) {
                console.log(error)
                socket.emit("socket-error", { message: "" })
            }
        })
    })
}