import type { NextFunction, Request, Response } from "express"
import { createBranchSchema } from "./create_branch.schema"
import type { CreateBranchService } from "./create_branch.service"

export class CreateBranchController {
    constructor(private service:CreateBranchService){}
    createBranch = async (req:Request, res:Response, next:NextFunction) => {
        const data = createBranchSchema.safeParse(req.body)
        const restaurantId = req.user?.restaurantId
        if(!data.success){
            return next(data.error)
        }

        if(!restaurantId){
            return res.status(401).json({message:"", success:false})
        }

        try {
            const { address, city, country, table, name } = data.data
            await this.service.createBranch(name, address, city, country, table, restaurantId)
            return res.status(201).json({message:"branch created", success:true})
        } catch (error) {
            console.error(error)
        }
    }
}