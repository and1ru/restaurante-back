import { prisma } from "../../../lib/prisma"

export const findRestaurantByBranch = async (branchId: number, restaurantId: number) => {
    return await prisma.branches.findUnique({ where: { id: branchId, restaurant_id: restaurantId } })
}

export const findDishByRestaurantId = async (dishId: number, restaurantId: number) => {
    return await prisma.dishes.findFirst({ 
        where: { id: dishId, restaurant_id: restaurantId }, 
        select: { name:true } 
    })
}

export const findDishBranch = async (dishId: number, branchId: number) => {
    return await prisma.branch_dishes.findFirst({ where: { dish_id: dishId, branch_id: branchId } })
}

export const createBranchDishRepository = async (price: number, dishId: number, branchId: number, name: string) => {
    await prisma.branch_dishes.create({ data: { price, dish_id: dishId, branch_id: branchId, name } })
}