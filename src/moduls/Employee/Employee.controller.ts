import type { NextFunction, Request, Response } from "express";
import type { EmployeesService } from "./Employee.service";
import type { roleFilter } from "../../types/role";

export class EmployeeController {
    constructor(private service:EmployeesService){}
    employee = async (req:Request, res:Response, next:NextFunction) => {
        const { branch, name, role } = req.query
        const userRole = req.user?.role
        const userId = req.user?.userId
        const restaurantId = req.user?.restaurantId

        if(!userId || !userRole || !restaurantId){
            return res.status(401)
        }

        if(typeof name !== "string" || typeof branch !== "string"){
            return res.status(400).json({message:"credential error", success:false})
        }

        try {
            const result = await this.service.employees(restaurantId,userRole, userId, name, branch, role as roleFilter)
            return res.status(200).json({message:"got employees", success:true, result})
        } catch (error) {
            return next(error)
        }
    }
}