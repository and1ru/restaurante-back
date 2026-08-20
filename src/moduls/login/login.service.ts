import { comparePassword } from "../../helper/comparePassword"
import { CustomError } from "../../helper/cutomError"
import { generateToken } from "../../helper/generateToken"
import { loginRepository } from "./login.repository"

export class LoginService {
    login = async (email:string, password:string) => {
        // verificar que exista un usuario con el email
        // retornar si no existe
        const user = loginRepository(email)
        if(!user){
            throw new CustomError(404,"no user")
        }

        // verificar la contraseña
        const verifyPassword = await comparePassword(password, user.password)
        if(!verifyPassword){
            throw new CustomError(400, "wrog password")
        }

        // generar token 
        const token = generateToken({user.id, user.rol})
        // retornar token y rol   
        return {token, user.rol}
    }
}