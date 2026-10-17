import type { NextFunction, Request, Response } from "express";
import { createBranchDishSchema } from "./create_branch_dish.schema";
import type { CreateBranchDishService } from "./create_branch_dish.service";
import { CustomError } from "../../helper/cutomError";

export class CreateBranchDishController {
    constructor(private service:CreateBranchDishService){}
    createBranchDish = async (req:Request, res:Response, next:NextFunction) => {
        const data = createBranchDishSchema.safeParse(req.body)
        const { branchId, restaurantId } = req.user

        if(!data.success){
            console.log("entro aqui")
            console.log(data.data)
            console.log(data.error.flatten())
            return next(data.error)
        }

        if(branchId === null){
            throw new CustomError(400,"ADMIN must belong to a branch")
        }

        try {
            const { dishId, price } = data.data
            await this.service.createBranchDish(dishId, price, branchId, restaurantId)
            return res.status(201).json({message:"product in branch", success:true})
        } catch (error) {
            return next(error)
        }
    }
}