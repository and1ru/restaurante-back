import { CustomError } from "../../helper/cutomError";
import { findBranchDish, findBranch, createOrder, createDishOrder } from "./send_order.repository";
import type { dishType } from "./send_order.schema";

export class SendOrderService {
    sendOrder = async (dishes:dishType[], userId:number) => {
        const branchDishes = []

        // obtener la branch
        const branch = await findBranch(userId)
        if(!branch){
            throw new CustomError(404, "no branch")
        }

        // obtener los precios y nade de branch_dishes
        for (const dish of dishes) {
            const branchDish = await findBranchDish(dish.id, branch.branchId)
            if(!branchDish){
                throw new CustomError(400, "no se pudo encontrar el dish")
            }
            const subTotal = Number(branchDish.price) * dish.quantity
            branchDishes.push({
                branchId: branchDish.id,
                subTotal,
                quantity: dish.quantity
            })
        }

        if(branchDishes.length !== dishes.length){
            throw new CustomError(400, "something went wrong")
        }
        // obtener un total
        const total = branchDishes.reduce((prev, curr) => prev + curr.subTotal, 0)

        // crear una order
        const order = await createOrder(total, branch.branchId)
        // insertar en esa order cada dish y quantity
        for (const dish of branchDishes) {
            await createDishOrder(dish.quantity, dish.subTotal, userId, order.id, branch.branchId)
        }
        return
    }
}