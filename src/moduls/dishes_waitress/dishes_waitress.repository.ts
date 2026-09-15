import { prisma } from "../../../lib/prisma"

export const dishesRepositoryWaitress = async (branchId:number) => {
    return await prisma.branch_dishes.findMany({
        where:{branch_id:branchId}, 
        include: {
            Dish: {
                select:{
                    name:true,
                    image_url:true
                }
            }
        }})
}
