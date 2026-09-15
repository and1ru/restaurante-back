import { Server } from 'socket.io'
import { OrdersRepository } from './get_orders_chef.repository'
import { CustomError } from '../../helper/cutomError'

export const OrdersChef = (io: Server) => {
    io.on("connection", (socket) => {

        socket.on("get-orders-chef", async () => {
            const user = socket.data.user
            const branchId = user.branchId
            if (branchId === null || branchId === undefined) {
                throw new CustomError(404, "no branch")
            }

            try {
                const orders = await OrdersRepository(branchId)
                socket.emit("orders-chef", orders)
            } catch (error) {
                console.error(error)
            }
        })
    })
}
