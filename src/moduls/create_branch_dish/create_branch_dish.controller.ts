import type { NextFunction, Request, Response } from "express";
import { createBranchDishSchema } from "./create_branch_dish.schema";
import type { CreateBranchDishService } from "./create_branch_dish.service";

export class CreateBranchDishController {
    constructor(private service:CreateBranchDishService){}
    createBranchDish = async (req:Request, res:Response, next:NextFunction) => {
        const data = createBranchDishSchema.safeParse(req.body)
        const branchId = req.user?.branchId

        if(!data.success){
            return next(data.error)
        }

        if(branchId === null || branchId === undefined){
            return res.status(400).json({message:"", success:false})
        }

        try {
            const { id, price, name } = data.data
            await this.service.createBranchDish(id, price, branchId, name)
            return res.status(201).json({message:"product in branch", success:true})
        } catch (error) {
            return next(error)
        }
    }
}
