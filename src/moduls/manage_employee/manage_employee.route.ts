import { Router } from "express";
import { ManageEmployeeController } from "./manage_employee.controller";
import { ManageEmployeeService } from "./manage_employee.service";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";

const service = new ManageEmployeeService()
const controller = new ManageEmployeeController(service)
const route = Router()

route.get("/employee/:employeeId", authToken, authRole("OWNER", "ADMIN"), controller.manageEmployee)

export default route