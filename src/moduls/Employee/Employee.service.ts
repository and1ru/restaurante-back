import type { role, roleFilter } from "../../types/role"
import { employeeFilter } from "./Employee.repository"


export class EmployeesService{
    employees = async (restaurantId:number, userRole:string, authenticatedBranchId:number | null | undefined, name:string, branchId:string, role:roleFilter) => {
        // puede venir todo vario branchId=0 role=""
        if(userRole === "OWNER"){
            const result = await employeeFilter(Number(branchId), role, name, restaurantId)
            return result
        }

        if(userRole === "ADMIN"){
            if (authenticatedBranchId === null || authenticatedBranchId === undefined) {
                throw new Error("A branch assignment is required")
            }
            const result = await employeeFilter(authenticatedBranchId, role, name, restaurantId)
            return result
        }


        // verificar que la branch si sea del restaurantId
    }
}
