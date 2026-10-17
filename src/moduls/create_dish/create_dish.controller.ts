import type { NextFunction, Request, Response } from "express";
import type { CreateDishService } from "./create_dish.service";
import { createDishSchema } from "./create_dish.schema";

export class CreateDishController {
    constructor(private service:CreateDishService){}
    createDish = async (req:Request, res:Response, next:NextFunction) => {
        const data = createDishSchema.safeParse(req.body)
        const image = req.file
        const { restaurantId } = req.user!

        if(!data.success){
            return next(data.error)
        }

        if(!image){
            return res.status(400).json({message:"no image", success:false})
        }

        try {
            const { category, name } = data.data
            await this.service.createDish(image, Number(category), name, restaurantId)
            return res.status(201).json({message:"dish created", success:true})
        } catch (error) {
            return next(error)
        }
    }
}