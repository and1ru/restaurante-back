import { prisma } from "../../../lib/prisma"

export const dishesRepositoryWaitress = async (branchId:number) => {
    return await prisma.branch_dishes.findMany({
        where:{ branch_id:branchId }, 
        select:{
            id:true,
            name:true,
            price:true,
            description:true,
            ingredients:true,
            Dish:{
                select:{
                    image_url:true
                }
            }
        },
        orderBy:{
            name: "asc"
        }
    })
}