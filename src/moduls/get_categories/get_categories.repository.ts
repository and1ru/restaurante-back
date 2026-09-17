import { prisma } from "../../../lib/prisma"

export const categoriesRepository = async (restaurantId:number) => {
    return await prisma.categories.findMany({ 
        where:{restaurant_id:restaurantId}, 
        select:{
            id:true,
            name:true,
        }
    })
}