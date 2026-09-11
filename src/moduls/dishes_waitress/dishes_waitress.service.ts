import { CustomError } from "../../helper/cutomError"
import { dishesRepositoryWaitress, findBranch } from "./dishes_waitress.repository"

export class DishesService {
    dishes = async (userId: number) => {
        // busca una branch
        const branch = await findBranch(userId)
        // si no encuentra una branch error y sale
        if (!branch) {
            throw new CustomError(404, "no found branch")
        }
        // obtiene todos los dishes de su branch
        const dishes = await dishesRepositoryWaitress(branch.branchId)

        const result = []

        for (const dish of dishes) {
            const newDish = {
                id: dish.id,
                price: dish.price,
                image_url: dish.Dish.image_url,
                name: dish.Dish.name
            }

            result.push(newDish)
        }
        return result
    }
}