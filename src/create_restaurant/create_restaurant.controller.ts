import type { NextFunction, Request, Response } from "express"
import { createRestaurantSchema } from "./create_restaurant.schema"
import type { CreateRestaurantService } from "./create_restaurant.service"

export class CreateRestaurantController{
    constructor(private service:CreateRestaurantService){}
    createRestaurant = async (req:Request, res:Response, next:NextFunction) => {
        const data = createRestaurantSchema.safeParse(req.body)
        if(!data.success){
            return
        }

        try {
            const { ownerName, nameRestaurant, email, password } = data.data
            const response = this.service.createRestaurant(ownerName, nameRestaurant, email, password)
        } catch (error) {
            console.error(error)
        }
    }
}