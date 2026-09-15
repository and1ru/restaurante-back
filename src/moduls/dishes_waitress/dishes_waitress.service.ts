import { dishesRepositoryWaitress } from "./dishes_waitress.repository"

export class DishesService {
    dishes = async (branchId: number) => {
        const dishes = await dishesRepositoryWaitress(branchId)
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
