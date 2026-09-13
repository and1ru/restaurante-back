import { prisma } from "../../../lib/prisma"

export const findBranch = (userId:number) => {
    return prisma.employees.findUnique({where:{userId}})
}


export const OrdersRepository = async (branchId:number) => {
    // necesito obtner todas las orders
    return await prisma.orders.findMany({
        // solo las orders de la branch
        where:{ branch_id:branchId },
        include:{
            // cada order puede tener varios order dishes
            Order_dish:{
                select:{
                    branch_dish_id:true,
                    quantity:true,
                    name:true
                }
            }
        }
    })
}