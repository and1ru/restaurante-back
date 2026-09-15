import { prisma } from "../../../lib/prisma"

export const OrdersRepository = async (userId: number) => {
    return await prisma.orders.findMany({
        where: { status: "READY", user_id:userId },
        include: {
            Order_dish: {
                select: {
                    id: true,
                    quantity: true,
                    name: true
                }
            }
        }
    })
}
