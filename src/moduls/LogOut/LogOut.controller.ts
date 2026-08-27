import type { NextFunction, Response, Request } from "express";

export class LogOutController {
    logOut = async (_req:Request, res:Response, next:NextFunction) => {
        try {
            res.clearCookie("token")
            return res.status(200).json({message:"loged out", success:true})
        } catch (error) {
            next(error)
        }
    }
}