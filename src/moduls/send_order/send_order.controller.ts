import type { NextFunction, Request, Response } from "express";
import type { SendOrderService } from "./send_order.service";
import { orderSchema } from "./send_order.schema";

export class SendOrderController {
    constructor(private service:SendOrderService){}
    sendOrder = async (req:Request, res:Response, next:NextFunction) => {
        const data = orderSchema.safeParse(req.body)
        const userId = req.user?.userId

        if(!data.success){
            return next(data.error)
        }

        if(!userId){
            return res.status(400).json({message:"", success:false})
        }

         try {
            await this.service.sendOrder(data.data, userId)
            return res.status(201).json({message: "", success:true})
        } catch (error) {
            return next(error)
        }
    }
}