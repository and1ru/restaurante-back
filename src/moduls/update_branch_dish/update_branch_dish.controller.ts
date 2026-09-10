import type { NextFunction, Response, Request } from "express";
import { updateBranchDishSchema } from "./update_branch_dish.schema";
import type { UpdateBranchDishService } from "./update_branch_dish.service";

export class UpdateBranchDishController {
    constructor(private service:UpdateBranchDishService){}
    updateBranchDish = async (req:Request, res:Response, next:NextFunction) => {
        const data = updateBranchDishSchema.safeParse(req.body)
        if(!data.success){
            return next(data.error)
        }

        try {
            const { id, price } = data.data
            await this.service.updateBranchDish(id, price)
            return res.status(200).json({message:"dish updated", success:false})
        } catch (error) {
            return next(error)
        }
    }
}