import { comparePassword } from "../../helper/comparePassword"
import { CustomError } from "../../helper/cutomError"
import { generateToken } from "../../helper/generateToken"
import { hashPassword } from "../../helper/hashPassword"
import { loginRepository } from "./login.repository"

export class LoginService {
    login = async (email:string, password:string) => {
        const user = await loginRepository(email)
        if(!user){
            throw new CustomError(404,"no user")
        }

        const verifyPassword = await comparePassword(password, user.password)
        if(!verifyPassword){
            throw new CustomError(400, "wrog password")
        }

        const { id, restaurant_id, role, name, branch_id} = user
        const token = generateToken({restaurantId:restaurant_id, userId:id, role, name, branchId:branch_id})
        
        return {token}
    }
}