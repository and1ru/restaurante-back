import { CustomError } from "../../helper/cutomError"
import { findUserById } from "./manage_employee.repository"

export class ManageEmployeeService {
    manageEmployee = async (restaurantId: number, employeeId: number, branchId:number | null) => {
        const user = await findUserById(employeeId, restaurantId, branchId )
            if(!user){
                throw new CustomError(404, "no found user")
            }

            const result = {
                id: user.id,
                salary: user.salary,
                hireDate: user.hireDate,
                name: user.User.name,
                role: user.User.role,
                branch: user.User.Branch?.name
            }

            return result
    }
}