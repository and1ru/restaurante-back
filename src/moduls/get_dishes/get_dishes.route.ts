import { Router } from "express";
import { DishesController } from "./get_dishes.controller";
import { DishesService } from "./get_dishes.service";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";

const service = new DishesService()
const controller = new DishesController(service)
const route = Router()

route.get("/dishes", authToken, authRole("ADMIN", "OWNER"), controller.dishes)

export default route