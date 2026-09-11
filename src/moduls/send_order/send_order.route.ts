import { Router } from "express";
import { SendOrderController } from "./send_order.controller";
import { SendOrderService } from "./send_order.service";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";

const service = new SendOrderService()
const controller = new SendOrderController(service)
const route = Router()

route.post("/create-order", authToken, authRole("WAITRESS"), controller.sendOrder)

export default route