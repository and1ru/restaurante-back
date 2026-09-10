import { prisma } from "../../../lib/prisma"

export const updateBranchDish = async (id:number, price:number) => {
    await prisma.branch_dishes.update({where:{id}, data:{price}})
    return
}