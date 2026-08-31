import { Router } from "express";
import { EmployeeController } from "./Employee.controller";
import { EmployeesService } from "./Employee.service";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";

const service = new EmployeesService()
const controller = new EmployeeController(service)
const route = Router()

route.get("/get-employees", authToken, authRole("ADMIN", "OWNER"), controller.employee)

export default route