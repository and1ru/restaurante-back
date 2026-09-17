import type { NextFunction, Request, Response } from "express";
import type { EmployeesService } from "./Employee.service";
import { filterEmployee } from "./Employee.schema";

export class EmployeeController {
    constructor(private service:EmployeesService){}
    employee = async (req:Request, res:Response, next:NextFunction) => {
        const data = filterEmployee.safeParse(req.query)
        const { role:userRole, restaurantId, branchId} = req.user!

        if(!data.success){
            return next(data.error)
        }

        try {
            const { branch, name, role } = data.data
            const result = await this.service.employees(restaurantId, userRole, branchId, name, Number(branch), role)
            return res.status(200).json({message:"got employees", success:true, result})
        } catch (error) {
            return next(error)
        }
    }
}