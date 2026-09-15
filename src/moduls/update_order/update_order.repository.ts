import { prisma } from "../../../lib/prisma"

type orderStatus = "READY" | "DONE" | "PENDDING" | "COOKING"

export const updateOrderRepository = async (orderId: number, branchId: number, newStatus: orderStatus) => {
    const result = await prisma.orders.updateMany({ where: { id: orderId, branch_id: branchId }, data: { status: newStatus } })
    return result.count > 0
}

export const newOrder = async (orderId: number) => {
    return await prisma.orders.findUnique({
        where: { id: orderId },
        include: {
            Order_dish: {
                select: {
                    id: true,
                    name: true,
                    quantity: true,
                }
            }
        },
    })
}

