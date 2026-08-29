import { Router } from "express";
import { HireController } from "./hire.controller";
import { HireService } from "./hire.service";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";

const service = new HireService()
const controller = new HireController(service)
const route = Router()

route.post("/hire", authToken, authRole("OWNER", "ADMIN"), controller.hire)

export default route