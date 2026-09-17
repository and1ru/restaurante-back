import type { NextFunction, Request, Response } from "express";
import { hireSchema } from "./hire.schema";
import type { HireService } from "./hire.service";

export class HireController {
    constructor(private service:HireService){}
    hire = async (req:Request, res:Response, next:NextFunction) => {
        const data = hireSchema.safeParse(req.body)
        const { branchId, role:userRole, restaurantId, userId } = req.user!

        if(!data.success){
            return next(data.error)
        }

        try {
            const { branch, email, name, password, role, salary } = data.data
            await this.service.hire(userId, email, name, password, role, restaurantId, branch, userRole, branchId, salary)

            return res.status(201).json({message:"user created", success:true})
        } catch (error) {
            return next(error)
        }
    }
}
