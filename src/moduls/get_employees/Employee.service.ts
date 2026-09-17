import { CustomError } from "../../helper/cutomError"
import type { roleFilter } from "../../types/role"
import { employeeFilter } from "./Employee.repository"


export class EmployeesService{
    employees = async (restaurantId:number, userRole:string, userBranchId:number | null, name?:string, branchId?:number, role?:roleFilter) => {
        // si es admin solo puede obtener los usuarios de su branch y no puede obtener otros admins
        if(userRole === "OWNER"){
            return await employeeFilter(restaurantId, branchId, role, name, )
        }

        if(userRole === "ADMIN"){
            if (userBranchId === null) {
                throw new CustomError(400, "A branch assignment is required")
            }

            if(role === "ADMIN"){
                throw new CustomError(403, "CAN'T GET ANOTHER ADMIN")
            }

            return await employeeFilter(restaurantId, userBranchId, role, name, )
        }

        throw new CustomError(403, "YOU ARE NOT ALLOWED TO ACCESS EMPLOYEES")
    }
}