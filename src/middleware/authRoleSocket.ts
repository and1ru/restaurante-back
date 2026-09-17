import { Socket } from 'socket.io'
import { CustomError } from '../helper/cutomError'
import type { role } from '../types/role'

export const AuthRoleSocket = (socket:Socket,...roles:role[]) => {
    const user = socket.data.user

    const verifyRole = roles.includes(user.role)
    
    if(!verifyRole){
        throw new CustomError(403, "no authorizated")
    }
}