import type { NextFunction, Request, Response } from "express";
import { createCategorySchema } from "./create_category.schema";
import type { CreateCategoryService } from "./create_category.service";

export class CreateCategoryController {
    constructor(private service:CreateCategoryService){}
    createCategory = async (req:Request, res:Response, next:NextFunction) => {
        const data = createCategorySchema.safeParse(req.body)
        const restaurantId = req.user?.restaurantId

        if(!restaurantId){
            return res.status(401).json({message:"", success:false})
        }
        if(!data.success){
            return next(data.error)
        }

        try {
            const { name } = data.data
            await this.service.createCategory(name, restaurantId)
        } catch (error) {
            return next(error)
        }
    }
}