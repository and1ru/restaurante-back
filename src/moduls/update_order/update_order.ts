import { Server } from 'socket.io'
import { findBranch, newOrder, updateOrderRepository } from './update_order.repository'
import { CustomError } from '../../helper/cutomError';

interface Data {
    id:number;
    state:string
}

type orderStatus = "READY" | "DONE" | "PENDDING" | "COOKING"

export const updateOrder = (io:Server) => {

    io.on("connection", async (socket) => {
        const user = socket.data.user
        const branch = await findBranch(user.userId)
        if(!branch){
            throw new CustomError(404, "no branch")
        }

        socket.join(`branch-${branch.branchId}`)

        socket.on("update-state", async (data:Data) => {
            const orderId = data.id
            const currentState = data.state
            let newState:orderStatus = "PENDDING"

            if(currentState === "PENDDING"){
                newState = "COOKING"
            } else if(currentState === "COOKING"){
                newState = "READY"
            } else if (currentState === "READY") {
                newState = "DONE"
            } else {
                return
            }
            await updateOrderRepository(orderId, newState)

            socket.emit("order-updated",{orderId, newState})

            if(newState === "READY"){
                console.log("its ready")
                const order = await newOrder(data.id)
                if(!order){
                    throw new CustomError(404, "no order")
                }
                console.log("llego hasta aqui")
                io.to(`branch-${branch.branchId}`).emit("new-order-waitress", order)
            }
        })
    })
}