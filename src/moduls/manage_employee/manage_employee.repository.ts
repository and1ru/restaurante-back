import { prisma } from "../../../lib/prisma"

export const findUserById = async (employeeId:number, restaurantId:number, branchId:number | null) => {
    return await prisma.employees.findUnique({ 
        where: { userId:employeeId, 
            User:{ restaurant_id:restaurantId, ...(branchId !== null && { branch_id:branchId}) } 
        }, 
        include: { 
            User: { 
                select: { name:true, role:true, Branch: 
                    { select: {name:true} }  
                }
            }
        }})
}