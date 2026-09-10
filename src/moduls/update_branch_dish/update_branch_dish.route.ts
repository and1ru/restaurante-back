import { Router } from "express";
import { UpdateBranchDishController } from "./update_branch_dish.controller";
import { UpdateBranchDishService } from "./update_branch_dish.service";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";

const service = new UpdateBranchDishService()
const controller = new UpdateBranchDishController(service)
const route = Router()

route.patch("/update-branch-dish", authToken, authRole("ADMIN"), controller.updateBranchDish)

export default route