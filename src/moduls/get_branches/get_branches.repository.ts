import { prisma } from "../../../lib/prisma"

export const branchesRepository = async (restaurantId:number) => {
    return await prisma.branches.findMany({where:{restaurant_id:restaurantId}, omit:{address:true, country:true, restaurant_id:true, tables:true }})
}