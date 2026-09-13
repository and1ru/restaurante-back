import { Server } from 'socket.io'
import { findBranch, OrdersRepository } from './get_orders.repository'

export const Orders = (io:Server) => {
    io.on("connection", async (socket) => {
        const user = socket.data.user
        // obtener la branch
        const branch = await findBranch(user.userId)
        if(!branch){
            return
        }

        try {
            const orders = await OrdersRepository(branch.branchId)
            socket.emit("orders", orders)
        } catch (error) {
            console.error(error)
        }
    })
}