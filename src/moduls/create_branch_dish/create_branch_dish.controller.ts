import type { NextFunction, Request, Response } from "express";
import { createBranchDishSchema } from "./create_branch_dish.schema";
import type { CreateBranchDishService } from "./create_branch_dish.service";

export class CreateBranchDishController {
    constructor(private service:CreateBranchDishService){}
    createBranchDish = async (req:Request, res:Response, next:NextFunction) => {
        const data = createBranchDishSchema.safeParse(req.body)
        const userId = req.user?.userId

        if(!data.success){
            return next(data.error)
        }

        if(!userId){
            return res.status(401).json({message:"", success:false})
        }

        try {
            const { id, price } = data.data
            await this.service.createBranchDish(id, price, userId)
            return res.status(201).json({message:"product in branch", success:true})
        } catch (error) {
            return next(error)
        }
    }
}