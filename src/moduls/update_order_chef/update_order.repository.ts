import { prisma } from "../../../lib/prisma"

type orderStatus = "READY" | "COOKING"
type currentStateType = "PENDING" | "COOKING"

export const updateOrderRepository = async (orderId: number, branchId: number, newStatus: orderStatus, currentState:currentStateType) => {
    const result = await prisma.orders.updateMany({ 
        where: { id: orderId, branch_id: branchId, status:currentState }, 
        data: { status: newStatus } 
    })

    return result.count
}