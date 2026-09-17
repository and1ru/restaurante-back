import { prisma } from "../../../lib/prisma"
import type { roleFilter } from "../../types/role"

export const employeeFilter = async (restaurantId: number, branchId?: number, role?: roleFilter, name?: string) => {
  return await prisma.users.findMany({
    where: {
      restaurant_id: restaurantId,
      // obtendra los usuarios de la branch
      ...(branchId !== undefined && { branch_id: branchId }),
      // obtendra los usuarios segun su role
      ...(role !== undefined && { role }),
      // obtendra los usuarios que contenga name en su nombre
      ...(name !== undefined && { name: { contains: name } }),
    },
    select: {
      id: true,
      name: true,
      role: true,
      Branch: {
        select: {
          name: true
        }
      }
    }
  })
}