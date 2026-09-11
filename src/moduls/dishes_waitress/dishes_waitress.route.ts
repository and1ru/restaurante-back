import { Router } from "express";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";
import { DishesService } from "./dishes_waitress.service";
import { DishesController } from "./dishes_waitress.controller";

const service = new DishesService();
const controller = new DishesController(service);
const route = Router();

route.get("/dishes/waitress",authToken,authRole("WAITRESS"),controller.dishes);

export default route;
