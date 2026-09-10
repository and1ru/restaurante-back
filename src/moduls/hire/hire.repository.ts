import { prisma } from "../../../lib/prisma"
import type { role } from "../../types/role"

export const hireRepository = async (email:string, name:string, password:string, role:role, restaurantId:number, branchId:number) => {
    const user = await prisma.users.create({data:{email, name, password, role, restaurant_id:restaurantId}})
    await prisma.employees.create({data: {userId:user.id, branchId}})
}

export const findBranchId = async (userId:number) => {
    return await prisma.employees.findUnique({where:{userId}, select:{branchId:true}})
}