import { Router } from "express"
import { CreateBranchDishController } from "./create_branch_dish.controller"
import { CreateBranchDishService } from "./create_branch_dish.service"
import { authToken } from "../../middleware/authToken"
import { authRole } from "../../middleware/authRole"

const service = new CreateBranchDishService()
const controller = new CreateBranchDishController(service)
const route = Router()

route.post("/create-branch-dish", authToken, authRole("ADMIN"), controller.createBranchDish)

export default route