import { comparePassword } from "../../helper/comparePassword"
import { CustomError } from "../../helper/cutomError"
import { generateToken } from "../../helper/generateToken"
import { hashPassword } from "../../helper/hashPassword"
import { loginRepository } from "./login.repository"

export class LoginService {
    login = async (email:string, password:string) => {
        // verificar que exista un usuario con el email
        // retornar si no existe
        const user = await loginRepository(email)
        if(!user){
            throw new CustomError(404,"no user")
        }

        // verificar la contraseña
        const verifyPassword = await comparePassword(password, user.password)
        if(!verifyPassword){
            throw new CustomError(400, "wrog password")
        }

        // generar token 
        const { id, restaurant_id, role, name} = user
        const token = generateToken({restaurantId:restaurant_id, userId:id, role, name})
        // retornar token y rol   
        return {token}
    }
}