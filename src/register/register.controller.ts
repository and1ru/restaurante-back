import type { NextFunction, Request, Response } from "express";
import type { RegisterService } from "./register.service";

export class RegisterController {
    constructor(private service:RegisterService){}

    register = (req:Request, res:Response, next:NextFunction) => {

    }
}