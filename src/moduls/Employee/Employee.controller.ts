import type { NextFunction, Request, Response } from "express";
import type { EmployeesService } from "./Employee.service";
import type { role } from "../../types/role";

export class EmployeeController {
    constructor(private service:EmployeesService){}
    employee = async (req:Request, res:Response, next:NextFunction) => {
        const {branch, role} = req.query
        const userRole = req.user?.role
        const userId = req.user?.userId
        const restaurantId = req.user?.restaurantId

        if(typeof branch !== "string" || typeof role !== "string" ){
            return res.status(400).json({message:"", success:false})
        }

        if(!userId || !userRole || !restaurantId){
            return res.status(401)
        }

        try {
            const result = await this.service.employees(restaurantId,userRole, userId, branch, role as role)
            return res.status(200).json({message:"got employees", success:true, result})
        } catch (error) {
            return next(error)
        }
    }
}