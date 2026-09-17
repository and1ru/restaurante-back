import { prisma } from "../../../lib/prisma"

export const CreateRestaurantRepository = async (ownerName:string, nameRestaurant:string, email:string, password:string) => {
    await prisma.restaurants.create({
        data:{ name:nameRestaurant, Users:{
            create:{
                email,
                name:ownerName,
                password,
                role:"OWNER",
            }
        }},
    })
}