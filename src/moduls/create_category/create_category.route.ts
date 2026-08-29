import { Router } from "express";
import { CreateCategoryController } from "./create_category.controller";
import { CreateCategoryService } from "./create_category.service";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";

const service = new CreateCategoryService()
const controller = new CreateCategoryController(service)
const route = Router()

route.post("/create-category", authToken, authRole("OWNER"), controller.createCategory)

export default route