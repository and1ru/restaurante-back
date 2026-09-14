import { Server } from 'socket.io'
import { findBranch, OrdersRepository } from './get_orders_chef.repository'
import { CustomError } from '../../helper/cutomError'

export const OrdersChef = (io: Server) => {
    io.on("connection", (socket) => {

        socket.on("get-orders-chef", async () => {
            const user = socket.data.user
            // obtener la branch
            const branch = await findBranch(user.userId)
            if (!branch) {
                throw new CustomError(404, "no branch")
            }

            try {
                const orders = await OrdersRepository(branch.branchId)
                socket.emit("orders-chef", orders)
            } catch (error) {
                console.error(error)
            }
        })
    })
}