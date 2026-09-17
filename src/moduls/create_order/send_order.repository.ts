import { prisma } from "../../../lib/prisma"

interface branchDishes{
    branchDishId: number;
    subTotal: number;
    quantity: number;
    name: string;
}

export const findBranchDish = async (branchDishId:number, branchId:number) => {
    return await prisma.branch_dishes.findFirst({
        where:{branch_id:branchId, id:branchDishId },
        select:{
            name:true,
            id:true,
            price:true
        }
    })
}

export const createOrder = async (total:number, branchId:number, userId:number, orderDishes:branchDishes[]) => {
    return await prisma.orders.create({ 
        data: { 
            status:"PENDING", 
            total, 
            branch_id:branchId, 
            user_id:userId,
            Order_dish:{
                createMany:{
                    data: orderDishes.map((dish) => ({
                        name: dish.name,
                        quantity: dish.quantity,
                        subtotal: dish.subTotal,
                        branch_dish_id: dish.branchDishId
                    }))
                }
            }
        }
    })
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