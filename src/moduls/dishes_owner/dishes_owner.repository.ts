import { prisma } from "../../../lib/prisma"

export const dishesRepositoryOwner = async (restaurantId:number) => {
    return await prisma.dishes.findMany({where:{restaurant_id:restaurantId}, select:{image_url:true, id:true, name:true}})
}