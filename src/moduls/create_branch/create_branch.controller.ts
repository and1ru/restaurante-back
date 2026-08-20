import type { NextFunction, Request, Response } from "express"
import { createBranchSchema } from "./create_branch.schema"
import type { CreateBranchService } from "./create_branch.service"

export class CreateBranchController {
    constructor(private service:CreateBranchService){}
    createBranch = (req:Request, res:Response, next:NextFunction) => {
        const data = createBranchSchema.safeParse(req.body)
        if(!data.success){
            return
        }

        try {
            const { } = data.data
            const response = this.service.createBranch()
        } catch (error) {
            console.error(error)
        }
    }
}