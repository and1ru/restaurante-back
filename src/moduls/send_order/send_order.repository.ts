import { prisma } from "../../../lib/prisma"

export const findBranch = async (userId:number) => {
    return await prisma.employees.findUnique({where:{userId}, select:{branchId:true}})
}

export const findBranchDish = async (dishId:number, branchId:number) => {
    return await prisma.branch_dishes.findFirst({where:{dish_id:dishId, branch_id:branchId}})
}

export const createOrder = async (total:number, branchId:number) => {
    return await prisma.orders.create({data:{status:"PENDDING", total, branch_id:branchId}})
}

export const createDishOrder = async (quantity:number, subTotal:number, userId:number, orderId:number, dishId:number) => {
    await prisma.order_dish.create({data:{quantity, subtotal:subTotal, user_id:userId, order_id:orderId, branch_dish_id:dishId}})
}