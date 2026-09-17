import { prisma } from "../../../lib/prisma"

export const updateOrderRepository = async ( orderId: number, branchId: number, userId: number) => {
    const result = await prisma.orders.updateMany({
        where: {
            id: orderId,
            branch_id: branchId,
            user_id: userId,
            status: "READY"
        },
        data: {
            status: "DONE"
        }
    })

    return result.count
}