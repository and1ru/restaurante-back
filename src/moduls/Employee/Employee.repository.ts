import { prisma } from "../../../lib/prisma"
import type { roleFilter } from "../../types/role"

export const employeeFilter = async (branchId:number, role:roleFilter, name:string, restaurantId:number) => {
    return await prisma.employees.findMany({
  where: {
    User: {
      restaurant_id: restaurantId,
      ...(branchId !== undefined && { branch_id: branchId }),
      ...(role !== "" && { role }),
      ...(name !== "" && { name: { contains: name } }),
    },
  },
  include: {
    User: {
      select: {
        name: true,
        role: true,
        branch_id: true,
        Branch: {
          select: { name: true },
        },
      },
    },
  },
})
}
