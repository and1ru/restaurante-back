import { Socket } from 'socket.io'
import { CustomError } from '../helper/cutomError'

export const AuthRoleSocket = (socket:Socket,...roles:string[]) => {
    const user = socket.data.user
    if(!user){
        throw new CustomError(401, "no authenticated")
    }

    const verifyRole = roles.includes(user.role)
    if(!verifyRole){
        throw new CustomError(403, "no authorizated")
    }
}