import { prisma } from "../../../lib/prisma"
import type { role, roleFilter } from "../../types/role"

export const employeeFilter = async (branchId:number, role:roleFilter, name:string) => {
    return await prisma.employees.findMany({
        where:{
            // branchId,
            // User:{role}
            ...(branchId !== 0 && {
                branchId
            }),
            ...(role !== "" && {
                User:{role}
            }),
            ...(name !== "" && {
                User:{name}
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

export const findBranch = async (userId:number) => {
    return await prisma.employees.findUnique({where:{userId}, select:{branchId:true}})
}