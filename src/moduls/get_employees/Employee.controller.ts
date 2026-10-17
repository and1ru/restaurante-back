import type { NextFunction, Request, Response } from "express";
import type { EmployeesService } from "./Employee.service";
import { employeeSchema } from "./Employee.schema";

export class EmployeeController {
    constructor(private service: EmployeesService) { }
    employee = async (req: Request, res: Response, next: NextFunction) => {
        const { restaurantId, branchId, role, userId } = req.user 
        const data = employeeSchema.safeParse(req.query)
        
        if(!data.success){
            return next(data.error)
        }

        try {
            const { employeeBranchId, employeeName, employeeRole } = data.data
            const result = await this.service.employees(restaurantId, role, branchId, employeeName, Number(employeeBranchId), employeeRole, userId )
            console.log(result)
            return res.status(200).json({ message: "got employees", success: true, result })
        } catch (error) {
            return next(error)
        }
    }
}