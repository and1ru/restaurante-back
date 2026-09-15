import { Server } from 'socket.io'
import { newOrder, updateOrderRepository } from './update_order.repository'
import { CustomError } from '../../helper/cutomError';

interface Data {
    id:number;
    state:string
}

type orderStatus = "PENDING" | "READY" | "DONE" | "COOKING"

export const updateOrder = (io:Server) => {

    io.on("connection", async (socket) => {
        const user = socket.data.user
        const branchId = user.branchId
        if(branchId === null || branchId === undefined){
            throw new CustomError(404, "no branch")
        }

        socket.join(`branch-${branchId}`)

        socket.on("update-state", async (data:Data) => {
            const orderId = data.id
            const currentState = data.state
            let newState:orderStatus = "PENDING"

            if(currentState === "PENDING"){
                newState = "COOKING"
            } else if(currentState === "COOKING"){
                newState = "READY"
            } else if (currentState === "READY") {
                newState = "DONE"
            } else {
                return
            }
            const updated = await updateOrderRepository(orderId, branchId, newState)
            if (!updated) {
                throw new CustomError(404, "order not found in branch")
            }

            socket.emit("order-updated",{orderId, newState})

            // esta parte es para agregar el pedido al orders del waitress
            if(newState === "READY"){
                const order = await newOrder(data.id)
                if(!order){
                    throw new CustomError(404, "no order")
                }
                io.to(`branch-${branchId}`).emit("new-order-waitress", order)
            }

            if(newState === "DONE"){
                socket.emit("order-waitress-updated",{orderId, newState})
            }
        })
    })
}
