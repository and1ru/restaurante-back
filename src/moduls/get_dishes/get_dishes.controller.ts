import type { NextFunction, Request, Response } from "express";
import type { DishesService } from "./get_dishes.service";

export class DishesController {
    constructor(private service:DishesService){}
    dishes = async (req:Request, res:Response, next:NextFunction) => {
        const userId = req.user?.userId
        const userRole = req.user?.role
        const restaurantId = req.user?.restaurantId

        if(!userId || !userRole || !restaurantId){
            return res.status(401).json({message:"", success:false})
        }

        try {
            const result = await this.service.dishes(userId, userRole,restaurantId)
            return res.status(200).json({message:"got dishes", success:true, result})
        } catch (error) {
            return next(error)
        }
    }
}