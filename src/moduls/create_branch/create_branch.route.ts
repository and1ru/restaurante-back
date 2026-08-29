import { Router } from "express";
import { CreateBranchController } from "./create_branch.controller";
import { CreateBranchService } from "./create_branch.service";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";

const service = new CreateBranchService()
const controller = new CreateBranchController(service)
const route = Router()

route.post("/create-branch", authToken, authRole("OWNER"), controller.createBranch)

export default route