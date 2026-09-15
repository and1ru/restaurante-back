import { hashPassword } from "../../helper/hashPassword"
import type { role } from "../../types/role"
import { findRestaurantBranch, hireRepository } from "./hire.repository"

export class HireService {
    hire = async (email:string, name:string, password:string, role:role, restaurantId:number, requestedBranchId:number, userRole:string, authenticatedBranchId:number | null) => {
        const hashedPassword = await hashPassword(password)
        const branchId = userRole === "OWNER" ? requestedBranchId : authenticatedBranchId

        if (branchId === null || branchId === undefined) {
            throw new Error("A branch assignment is required to hire a branch-level employee")
        }

        const branch = await findRestaurantBranch(branchId, restaurantId)
        if (!branch) {
            throw new Error("Branch does not belong to the authenticated restaurant")
        }

        await hireRepository(email, name, hashedPassword, role, restaurantId, branchId)
    }
}
