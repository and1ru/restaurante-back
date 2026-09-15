import { prisma } from "../../../lib/prisma"

export const createBranchDishRepository = async (price:number, dishId:number, branchId:number, name:string) => {
    await prisma.branch_dishes.create({data:{price, dish_id:dishId, branch_id:branchId, name}})
}
