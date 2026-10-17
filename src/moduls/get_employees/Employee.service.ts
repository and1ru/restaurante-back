import { CustomError } from "../../helper/cutomError"
import type { roleFilter } from "../../types/role"
import { employeeFilter } from "./Employee.repository"

export class EmployeesService{
    employees = async (restaurantId:number, userRole:string, userBranchId:number | null, name:string | undefined, branchId:number, role:roleFilter | undefined, myId:number) => {
        if(userRole === "OWNER"){
            return await employeeFilter(restaurantId, branchId, role, name, myId)
        }

        if(userRole === "ADMIN"){
            if (userBranchId === null) {
                throw new CustomError(400, "A branch assignment is required")
            }
            console.log(restaurantId)
            console.log(userBranchId)
            console.log(role)
            console.log(name)
            console.log(myId)
            
            return await employeeFilter(restaurantId, userBranchId, role, name, myId )
        }

        throw new CustomError(403, "YOU ARE NOT ALLOWED TO ACCESS EMPLOYEES")
    }
}