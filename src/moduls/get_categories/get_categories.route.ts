import { Router } from "express";
import { CategoriesController } from "./get_categories.controller";
import { CategoriesService } from "./get_categories.service";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";

const service = new CategoriesService()
const controller = new CategoriesController(service)
const route = Router()

route.get("/categories", authToken, authRole("OWNER"), controller.categories)

export default route