import type { NextFunction, Request, Response } from "express"

export const authRole = (...AuthorizatedRole:string[]) => {
    return (req: Request, res: Response, next:NextFunction) => {
        const role = req.user?.role
        if(!role){
            // decir que no hay un usuario
            return res.status(401).json({message:"no role", success:false})
        }

        const verify = AuthorizatedRole.includes(role)

        if(!verify){
            // decir que no tiene permiso
            return res.status(401).json({message:"no authorizated", success:false})
        }
        next()
    }
}