import { hashPassword } from "../../helper/hashPassword"
import type { role } from "../../types/role"
import { hireRepository } from "./hire.repository"

export class HireService {
    hire = async (email:string, name:string, password:string, role:role, restaurantId:number, branchId:number) => {
        // verify that the company exist
        // verify that the role not be owner or root
        // verify that the user dont exist
        // hash password
        const hashedPassword = await hashPassword(password)

        await hireRepository(email,name, hashedPassword, role, restaurantId, branchId)
    }
}