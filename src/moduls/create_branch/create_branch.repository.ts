import { prisma } from "../../../lib/prisma"

export const createBranchRepository = async (name:string, address:string, city:string, country:string, restaurantId:number) => {
    await prisma.branches.create({ data: {name, address, city, country, restaurant_id:restaurantId }})
}