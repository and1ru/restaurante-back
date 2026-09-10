import { Router } from "express";
import { CreateDishController } from "./create_dish.controller";
import { CreateDishService } from "./create_dish.service";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";
import { uploadImage } from "../../middleware/upload";

const service = new CreateDishService()
const controller = new CreateDishController(service)
const route = Router()

route.post("/create-dish", authToken, authRole("OWNER"), uploadImage.single("image"), controller.createDish)

export default route