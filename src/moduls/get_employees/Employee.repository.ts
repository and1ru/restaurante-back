import { prisma } from "../../../lib/prisma"
import type { roleFilter } from "../../types/role"

export const employeeFilter = async (restaurantId: number, branchId: number, role: roleFilter | undefined, name: string | undefined, myId:number) => {

  return await prisma.users.findMany({
    where: {
      id: {
        not: myId
      },
      
      restaurant_id: restaurantId,
      // obtendra los usuarios de la branch
      ...(branchId !== 0  && { branch_id: branchId }),
      // obtendra los usuarios segun su role
      ...(role !== "" && { role }),
      // obtendra los usuarios que contenga name en su nombre
      ...(name !== "" && { name: { contains: name } }),
    },
    select: {
      id: true,
      name: true,
      role: true,
      Branch: {
        select: {
          name: true,
          id: true
        }
      }
    }
  })
}