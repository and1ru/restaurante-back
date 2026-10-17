import type { NextFunction, Request, Response } from "express";
import type { ManageEmployeeService } from "./manage_employee.service";

export class ManageEmployeeController {
    constructor(private service:ManageEmployeeService){}
    manageEmployee = async (req:Request , res:Response , next:NextFunction) => {
        const employeeId = Number(req.params.employeeId)
        const { restaurantId, branchId } = req.user

        if(!employeeId){
            return res.status(400).json({ message:"employeeId is required", success:false})
        }

        try {
            const result = await this.service.manageEmployee(restaurantId, employeeId, branchId)
            return res.status(200).json({ message:"got employee", success:true, result })
        } catch (error) {
            return next(error)
        }
    }
}