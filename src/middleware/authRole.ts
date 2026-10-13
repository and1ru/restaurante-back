import type { NextFunction, Request, Response } from "express"

type role =  "ADMIN" | "CASHIER" | "CHEF" | "RECEPTIONIST" | "WAITRESS" | "ROOT" | "OWNER"

export const authRole = (...AuthorizatedRole:role[]) => {
    return (req: Request, res: Response, next:NextFunction) => {
        const { role } = req.user!
        if(!role){
            return res.status(401).json({message:"no role", success:false})
        }

        const verify = AuthorizatedRole.includes(role)

        if(!verify){
            return res.status(403).json({message:"no authorizated", success:false})
        }
        next()
    }
}