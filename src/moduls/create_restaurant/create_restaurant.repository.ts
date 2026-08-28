import { prisma } from "../../../lib/prisma"

export const CreateRestaurantRepository = async (ownerName:string, nameRestaurant:string, email:string, password:string) => {
    const restaurant = await prisma.restaurants.create({data: {name:nameRestaurant}})
    const user = await prisma.users.create({data: {email, name:ownerName, role:"OWNER", restaurant_id:restaurant.id, password}})
}