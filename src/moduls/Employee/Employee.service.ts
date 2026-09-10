import { CustomError } from "../../helper/cutomError"
import type { role, roleFilter } from "../../types/role"
import { employeeFilter, findBranch } from "./Employee.repository"


export class EmployeesService{
    employees = async (restaurantId:number, userRole:string, userId:number, name:string, branchId:string, role:roleFilter) => {
        // puede venir todo vario branchId=0 role=""
        if(userRole === "OWNER"){
            const result = await employeeFilter(Number(branchId),role, name)
            return result
        }

        if(userRole === "ADMIN"){
            const branch = await findBranch(userId)
            if(!branch){
                throw new CustomError(404, "not found branch")
            }

            const result = await employeeFilter(branch.branchId, role, name)
            return result
        }


        // verificar que la branch si sea del restaurantId
    }
}