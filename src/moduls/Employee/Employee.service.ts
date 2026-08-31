import { CustomError } from "../../helper/cutomError"
import type { role } from "../../types/role"
import { employeeFilter } from "./Employee.repository"


export class EmployeesService{
    employees = async (restaurantId:number, userRole:string, userId:number, branchId?:string, role?:role) => {
        // puede venir todo vario branchId=0 role=""
        const result = await employeeFilter(Number(branchId),role)
        return result

        // verificar que la branch si sea del restaurantId
    }
}