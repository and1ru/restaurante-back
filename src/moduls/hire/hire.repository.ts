import { prisma } from "../../../lib/prisma"
import type { role } from "../../types/role"

export const hireRepository = async (email:string, name:string, password:string, role:role, restaurantId:number, branchId:number, salary:number) => {
    await prisma.users.create({
        data:{
            email,
            name,
            password,
            role,
            restaurant_id:restaurantId,
            branch_id:branchId,
            Employee:{
                create:{
                    salary,
                    hireDate:new Date()
                }
            }
        }
    })
}

export const findRestaurantBranch = async (branchId:number, restaurantId:number) => {
    return prisma.branches.findFirst({ where: { id: branchId, restaurant_id: restaurantId } })
}