import { prisma } from "../../../lib/prisma"

export const createCategoryRepository = async (name:string, restaurantId:number) => {
    await prisma.categories.create({data:{ name, restaurant_id:restaurantId}})
}