import { prisma } from "../../../lib/prisma"

type orderStatus = "READY" | "DONE" | "PENDDING" | "COOKING"

export const updateOrderRepository = async (orderId: number, newStatus: orderStatus) => {
    await prisma.orders.update({ where: { id: orderId }, data: { status: newStatus } })
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

export const findBranch = async (userId:number) => {
    return await prisma.employees.findUnique({where:{userId}})
}