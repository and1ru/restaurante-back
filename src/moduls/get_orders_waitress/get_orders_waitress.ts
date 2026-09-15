import { Server } from 'socket.io'
import { OrdersRepository } from './get_orders_waitress.repository'
import { CustomError } from '../../helper/cutomError'

export const OrdersWaitress = (io: Server) => {
    io.on("connection", (socket) => {

        socket.on("get-orders-waitress", async () => {
            const user = socket.data.user
            // obtener la branch
            try {
                const orders = await OrdersRepository(user.userId)
                socket.emit("orders-waitress", orders)
            } catch (error) {
                console.error(error)
            }
        })
    })
}
