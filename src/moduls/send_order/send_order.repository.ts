import { prisma } from "../../../lib/prisma"

export const findBranch = async (userId:number) => {
    return await prisma.employees.findUnique({where:{userId}, select:{branchId:true}})
}

export const findBranchDish = async (dishId:number, branchId:number) => {
    return await prisma.branch_dishes.findFirst({
        where:{branch_id:branchId, id:dishId }
    })
}

export const createOrder = async (total:number, branchId:number) => {
    return await prisma.orders.create({data:{status:"PENDDING", total, branch_id:branchId}})
}

export const createDishOrder = async (quantity:number, subTotal:number, userId:number, orderId:number, dishId:number, name:string) => {
    await prisma.order_dish.create({data:{quantity, subtotal:subTotal, user_id:userId, order_id:orderId, branch_dish_id:dishId, name}})
}

export const finalOrderRepository = async (orderId:number) => {
    // necesito obtner todas las orders
    return await prisma.orders.findUnique({
        // solo las orders de la branch
        where:{ id:orderId },
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