import { CustomError } from "../../helper/cutomError"
import { hashPassword } from "../../helper/hashPassword"
import { findUserByEmail } from "../../shared/repositories/findUserByEmail.repository"
import type { role } from "../../types/role"
import { findRestaurantBranch, hireRepository } from "./hire.repository"

export class HireService {
    hire = async (userId:number, email:string, name:string, password:string, role:role, restaurantId:number, requestedBranchId:number, userRole:string, authenticatedBranchId:number | null, salary:number) => {

        // un admin no puede crear otro admin
        if(userRole === "ADMIN" && role === "ADMIN"){
            throw new CustomError(403, "ADMIN CAN'T HIRE ANOTHER ADMIN")
        }

        // el admin no puede elegir la branch (error si elige otra branch)
        const branchId = userRole === "OWNER" ? requestedBranchId : authenticatedBranchId

        // dice que branchId no puede ser null
        if (branchId === null) {
            throw new CustomError(400,"A branch assignment is required to hire a branch-level employee")
        }

        // verificar que la branch pertenezca a la compañia
        const branch = await findRestaurantBranch(branchId, restaurantId)
        if (!branch) {
            throw new CustomError(400, "Branch does not belong to the authenticated restaurant")
        }

        // verificar que no exista un usuario con el mismo email
        const existingUser = await findUserByEmail(email)
        if(existingUser){
            throw new CustomError(409, "A user with this email already exists")
        }

        // hashear la contraseña
        const hashedPassword = await hashPassword(password)

        // debe hacerse con transaccion
        await hireRepository(email, name, hashedPassword, role, restaurantId, branchId, salary)
    }
}
