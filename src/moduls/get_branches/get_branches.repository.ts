import { prisma } from "../../../lib/prisma"

export const branchesRepository = async (restaurantId:number) => {
    return await prisma.branches.findMany({
        where:{restaurant_id:restaurantId}, 
        select: {
            id: true,
            name: true,
            city: true
        }
    })
}