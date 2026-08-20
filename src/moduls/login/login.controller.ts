import type { NextFunction, Request, Response } from "express";
import type { LoginService } from "./login.service";
import { loginSchema } from "./login.schema";

export class LoginController {
    constructor(private service:LoginService){}
    login = (req:Request, res:Response, next:NextFunction) => {
        const data = loginSchema.safeParse(req.body)
        if(!data.success){
            return next(data.error)
        }
        try {
            const { email, password } = data.data
            const response = this.service.login(email, password)
        } catch (error) {
            console.error(error)
            return next(error)
        }
    }
}