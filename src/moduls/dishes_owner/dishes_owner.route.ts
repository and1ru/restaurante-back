import { Router } from "express";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";
import { DishesService } from "./dishes_owner.service";
import { DishesController } from "./dishes_owner.controller";

const service = new DishesService();
const controller = new DishesController(service);
const route = Router();

route.get("/dishes/owner",authToken,authRole("OWNER"),controller.dishes);

export default route;
