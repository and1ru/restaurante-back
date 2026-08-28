import type { NextFunction, Request, Response } from "express"
import { createRestaurantSchema } from "./create_restaurant.schema"
import type { CreateRestaurantService } from "./create_restaurant.service"

export class CreateRestaurantController{
    constructor(private service:CreateRestaurantService){}
    createRestaurant = async (req:Request, res:Response, next:NextFunction) => {
        const data = createRestaurantSchema.safeParse(req.body)
        if(!data.success){
            return next(data.error)
        }

        try {
            const { ownerName, nameRestaurant, email, password } = data.data
            await this.service.createRestaurant(ownerName, nameRestaurant, email, password)
            return res.status(201).json({message:"user and restaurant have been created", success:true})
        } catch (error) {
            console.error(error)
            next(error)
        }
    }
}