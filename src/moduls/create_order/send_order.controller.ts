import type { NextFunction, Request, Response } from "express";
import type { SendOrderService } from "./send_order.service";
import { orderSchema } from "./send_order.schema";
import { getIO } from "../../helper/socket";

export class SendOrderController {
    constructor(private service:SendOrderService){}
    sendOrder = async (req:Request, res:Response, next:NextFunction) => {
        const data = orderSchema.safeParse(req.body)
        const { userId, branchId} = req.user!

        if(!data.success){
            return next(data.error)
        }

        if(!branchId){
            return res.status(400).json({message:"", success:false})
        }

         try {
            const result = await this.service.sendOrder(data.data, userId, branchId)
            getIO().to(`branch:${branchId}:CHEF`).emit("new-order-chef", result)
            return res.status(201).json({message: "order created", success:true})
        } catch (error) {
            return next(error)
        }
    }
}
