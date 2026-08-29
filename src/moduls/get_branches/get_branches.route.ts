import { Router } from "express";
import { BranchesController } from "./get_branches.controller";
import { BranchesService } from "./get_branches.service";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";

const service = new BranchesService()
const controller = new BranchesController(service)
const route = Router()

route.get("/branches", authToken, authRole("OWNER"), controller.branches)

export default route