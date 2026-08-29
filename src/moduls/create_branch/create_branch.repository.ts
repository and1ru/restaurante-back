import { prisma } from "../../../lib/prisma"

export const createBranchRepository = async (name:string, address:string, city:string, country:string, table:number, restaurantId:number) => {
    await prisma.branches.create({data:{name, address, city, country, tables:table, restaurant_id:restaurantId}})
}