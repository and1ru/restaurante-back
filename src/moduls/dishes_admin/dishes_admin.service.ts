import { CustomError } from "../../helper/cutomError"
import { findBranch } from "../Employee/Employee.repository"
import { dishesRepositoryAdmin } from "./dishes_admin.repository"

export class DishesService {
    dishes = async (userId: number) => {
        // obtiene el branch
        const branch = await findBranch(userId)
        // si no encuentra el branch entonces lanza un error
        if (!branch) {
            throw new CustomError(404, "no found branch")
        }

        // obtiene los dishes de la branch
        const dishes = await dishesRepositoryAdmin(branch.branchId)

        let result = []

        for (const dish of dishes) {
            let branchDishId:number | null = 0;
            let price:number | null = 0;

            if(dish.Branch_Dishes.length <= 0){
                branchDishId = null;
                price: null
            } else {
                for (const element of dish.Branch_Dishes) {
                    branchDishId = element.id;
                    price = Number(element.price)
                }
            }

            const newDish = {
                id:dish.id,
                name:dish.name,
                image_url:dish.image_url,
                price,
                branchDishId,
                inBranch: dish.Branch_Dishes.length > 0
            }

            result.push(newDish)
        }
        return result.sort((a,b) => {
            const idA = a.branchDishId ?? -1; // Si es null, lo trata como -1
            const idB = b.branchDishId ?? -1; // Si es null, lo trata como -1
            return idB - idA; // Orden descendente (de mayor a menor)
        })
    }
}