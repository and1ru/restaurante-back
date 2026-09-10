import { CustomError } from "../../helper/cutomError"
import { hashPassword } from "../../helper/hashPassword"
import type { role } from "../../types/role"
import { findBranchId, hireRepository } from "./hire.repository"

export class HireService {
    hire = async (email:string, name:string, password:string, role:role, restaurantId:number, branchId:number, userRole:string, userId:number) => {
        // verify that the company exist
        // verify that the role not be owner or root
        // verify that the user dont exist
        // hash password
        const hashedPassword = await hashPassword(password)
        if(userRole === "OWNER" ){
            await hireRepository(email,name, hashedPassword, role, restaurantId, branchId)
        }
        
        if(userRole === "ADMIN"){
            const userBranchId = await findBranchId(userId)
            if(!userBranchId){
                throw new CustomError(404, "not found branch")
            }
            await hireRepository(email,name, hashedPassword, role, restaurantId, userBranchId.branchId)
        }

    }
}