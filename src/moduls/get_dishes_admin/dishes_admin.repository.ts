import { prisma } from "../../../lib/prisma"

export const dishesRepositoryAdmin = async (branchId: number, restaurantId:number) => {
    return await prisma.dishes.findMany({
        where:{restaurant_id:restaurantId},
        select: {
            id: true,
            name: true,
            image_url: true,

            Branch_Dishes: {
                where: { branch_id: branchId },
                select: {
                    id: true,
                    price: true,
                    name: true,
                }
            }
        },
    })
}