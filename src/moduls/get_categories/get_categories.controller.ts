import type { NextFunction, Request, Response } from "express"
import type { CategoriesService } from "./get_categories.service"

export class CategoriesController {
    constructor(private service:CategoriesService){}
    categories = async (req:Request, res:Response, next:NextFunction) => {
        const { restaurantId } = req.user!

        try {
            const result = await this.service.categories(restaurantId)
            return res.status(200).json({message:"got categories", success:true, result})
        } catch (error) {
            return next(error)
        }
    }
}