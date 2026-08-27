import type { NextFunction, Response, Request } from "express";

export class AuthController {
    auth = async (req:Request, res:Response, next:NextFunction) => {
        const role = req.user?.role
        const name = req.user?.name
        if(!role || !name){
            return res.status(401).json({message:"no authenticated", success:false})
        }
        try {
            const result = {name, role}
            return res.status(200).json({message:"authenticated", success:true, result})
        } catch (error) {
            next(error)
        }
    }
}