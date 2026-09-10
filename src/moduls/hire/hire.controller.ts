import type { NextFunction, Request, Response } from "express";
import { hireSchema } from "./hire.schema";
import type { HireService } from "./hire.service";

export class HireController {
    constructor(private service:HireService){}
    hire = async (req:Request, res:Response, next:NextFunction) => {
        const data = hireSchema.safeParse(req.body)
        const restaurantId = req.user?.restaurantId
        const userRole = req.user?.role
        const userId = req.user?.userId

        if(!data.success){
            return next(data.error)
        }

        if(!restaurantId || !userRole || !userId){
            return res.status(401).json({message:"", success:false})
        }

        try {
            const { branch, email, name, password, role } = data.data
            await this.service.hire(email, name, password, role, restaurantId, Number(branch), userRole, userId)

            return res.status(201).json({message:"user created", success:true})
        } catch (error) {
            return next(error)
        }
    }
}