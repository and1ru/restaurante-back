import { prisma } from "../../../lib/prisma"

export const findBranch = async (userId:number) => {
    return await prisma.employees.findUnique({where:{userId}, select:{branchId:true}})
}

export const createBranchDishRepository = async (price:number, dishId:number, branchId:number) => {
    await prisma.branch_dishes.create({data:{price, dish_id:dishId, branch_id:branchId}})
}