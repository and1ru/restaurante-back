import type { role, roleFilter } from "../../types/role"
import { employeeFilter } from "./Employee.repository"


export class EmployeesService{
    employees = async (restaurantId:number, userRole:string, userId:number, name:string, branchId:string, role:roleFilter) => {
        // puede venir todo vario branchId=0 role=""
        const result = await employeeFilter(Number(branchId),role, name)
        return result

        // verificar que la branch si sea del restaurantId
    }
}