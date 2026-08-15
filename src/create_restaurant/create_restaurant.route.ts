import { Router } from "express";
import { CreateRestaurantController } from "./create_restaurant.controller";
import { CreateRestaurantService } from "./create_restaurant.service";
import { authToken } from "../middleware/authToken";
import { authRole } from "../middleware/authRole";

const service = new CreateRestaurantService()
const controller = new CreateRestaurantController(service)

const route = Router()

route.post("", authToken, authRole("root"), controller.createRestaurant)

export default route