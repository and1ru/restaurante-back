import { prisma } from "../../../lib/prisma"

export const createDishRepository = async (imageId:string, imageUrl:string, name:string, categoryId:number, restaurantId:number, description:string) => {
    await prisma.dishes.create({data: {image_id:imageId, image_url:imageUrl, name, category_id:categoryId,restaurant_id:restaurantId, description}})
}