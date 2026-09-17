import { CustomError } from "../../helper/cutomError";
import { findBranchDish, createOrder, finalOrderRepository } from "./send_order.repository";
import type { dishType } from "./send_order.schema";

export class SendOrderService {
    sendOrder = async (dishes:dishType[], userId:number, branchId:number) => {
        const branchDishes = []

        // obtener los precios y nade de branch_dishes
        for (const dish of dishes) {
            // verifica que el dish pertenezca a la branch
            const branchDish = await findBranchDish(dish.branchDishId, branchId)

            if(!branchDish){
                throw new CustomError(400, "DISH DON'T BELONG TO BRANCH")
            }

            const subTotal = Number(branchDish.price) * dish.quantity

            branchDishes.push({
                branchDishId: branchDish.id,
                subTotal,
                quantity: dish.quantity,
                name: branchDish.name
            })
        }

        // obtener un total
        const total = branchDishes.reduce((prev, curr) => prev + curr.subTotal, 0)

        // crear una order y crea inmediatamente los order dishes
        const order = await createOrder(total, branchId, userId, branchDishes)

        // obtiene la order recien creada con un array de todos los order dishes
        const finalOrder = await finalOrderRepository(order.id)

        if(!finalOrder){
            throw new CustomError(404, "ORDER NO FOUND")
        }

        return finalOrder
    }
}