import { prisma } from "../../../lib/prisma"

export const branch = async (userId: number) => {
    return await prisma.employees.findUnique({ where: { userId }, select: { branchId: true } })
}

export const dishesRepositoryAdmin = async (branchId: number) => {
    return await prisma.dishes.findMany({
        select: {
            id: true,
            name: true,
            image_url: true,

            Branch_Dishes: {
                where: { branch_id: branchId },
                select: {
                    id: true,
                    price: true,
                }
            }
        }
    })
}