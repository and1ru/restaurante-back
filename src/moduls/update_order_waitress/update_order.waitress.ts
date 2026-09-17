import { Server } from 'socket.io'
import { updateOrderRepository } from './update_order.waitress.repository'
import { AuthRoleSocket } from '../../middleware/authRoleSocket';
import { updateOrderSchema } from './update_order_waitress.chema';

export const updateOrder = (io: Server) => {
    io.on("connection", async (socket) => {
        const user = socket.data.user

        if ( user.branchId != null && user.role === "WAITRESS") {
            socket.join(`branch:${user.branchId}:WAITRESS`)   
        }

        socket.on("update-state-waitress", async (data) => {
            const dataParsed = updateOrderSchema.safeParse(data)
            if(!dataParsed.success){
                socket.emit("socket-error", { message: "INVALID ID" })
                return
            }
            try {
                AuthRoleSocket(socket, "WAITRESS")
                const orderId = dataParsed.data.id
                const result = await updateOrderRepository(orderId,user.branchId, user.userId)
                
                if(result === 0){
                    socket.emit("socket-error", { message: "COULD NOT UPDATE ORDER" })
                    return
                }

                socket.emit("order-updated-waitress", { orderId })
            } catch (error) {
                console.error(error)
                socket.emit("socket-error", { message: "could not update order" })
            }

        })
    })
}