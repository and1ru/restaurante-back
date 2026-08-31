import { prisma } from "../../../lib/prisma"
import type { role, roleFilter } from "../../types/role"

interface User{
    branchId?:number, 
    role?:role
}

export const employeeFilter = async (branchId?:number, role?:roleFilter) => {
    return await prisma.employees.findMany({
        where:{
            // branchId,
            // User:{role}
            ...(branchId !== 0 && {
                branchId
            }),
            ...(role !== "" && {
                User:{role}
            })
        },

        include: {
            User:{
                select: { name:true, role:true, }
            },
            Branch:{
                select: { name:true }
            }
        }
    })
}