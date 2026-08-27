import { Router } from "express";
import { LogOutController } from "./LogOut.controller";
import { authToken } from "../../middleware/authToken";

const controller = new LogOutController()
const route = Router()

route.post("/logOut", authToken, controller.logOut)

export default route