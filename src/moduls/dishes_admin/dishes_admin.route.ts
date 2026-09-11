import { Router } from "express";
import { DishesController } from "./dishes_admin.controller";
import { DishesService } from "./dishes_admin.service";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";

const service = new DishesService();
const controller = new DishesController(service);
const route = Router();

route.get("/dishes/admin",authToken,authRole("ADMIN"),controller.dishes);

export default route;
