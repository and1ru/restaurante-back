import { prisma } from "../../../lib/prisma"

export const findBranch = async (userId:number) => {
    return await prisma.employees.findUnique({where:{userId}, select:{branchId:true}})
}

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