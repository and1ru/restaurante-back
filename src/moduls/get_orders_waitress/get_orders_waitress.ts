import { Server } from 'socket.io'
import { OrdersRepository } from './get_orders_waitress.repository'
import { AuthRoleSocket } from '../../middleware/authRoleSocket'

export const OrdersWaitress = (io: Server) => {
    io.on("connection", (socket) => {

        const user = socket.data.user
        if(user.role === "WAITRESS" && user.branchId !== null){
            socket.join(`branch:${user.branchId}:waitress`)
        }

        socket.on("get-orders-waitress", async () => {
            try {
                AuthRoleSocket(socket, "WAITRESS")
                const orders = await OrdersRepository(user.userId)
                socket.emit("orders-waitress", orders)
            } catch (error) {
                console.error(error)
                socket.emit("socket-error", { message: "could not get orders" })
            }
        })
    })
}
