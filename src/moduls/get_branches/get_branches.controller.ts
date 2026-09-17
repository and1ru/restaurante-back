import type { NextFunction, Request, Response } from "express";
import type { BranchesService } from "./get_branches.service";

export class BranchesController {
    constructor(private service:BranchesService){}
    branches = async (req:Request, res:Response, next:NextFunction) => {
        const { restaurantId } = req.user!

        try {
            const result = await this.service.branches(restaurantId)
            return res.status(200).json({message:"got branches", success:true, result})
        } catch (error) {
            return next(error)
        }
    }
}