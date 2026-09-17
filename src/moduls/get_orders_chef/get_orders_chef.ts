import { Server } from 'socket.io'
import { OrdersRepository } from './get_orders_chef.repository'
import { CustomError } from '../../helper/cutomError'
import { AuthRoleSocket } from '../../middleware/authRoleSocket'

export const OrdersChef = (io: Server) => {
    io.on("connection", (socket) => {

        const user = socket.data.user
        if(user.role === "CHEF" && user.branchId !== null){
            socket.join(`branch:${user.branchId}:CHEF`)
        }
        
        // escucha cuando el usuario pide los datos
        socket.on("get-orders-chef", async () => {
            try {
                AuthRoleSocket(socket, "CHEF")
                const orders = await OrdersRepository(user.branchId)
                socket.emit("orders-chef", orders)
            } catch (error) {
                console.error(error)
                socket.emit("socket-error", { message: "could not get orders" })
            }
        })
    })
}