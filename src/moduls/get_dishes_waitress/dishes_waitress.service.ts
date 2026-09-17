import { dishesRepositoryWaitress } from "./dishes_waitress.repository"

export class DishesService {
    dishes = async (branchId: number) => {
        const dishes = await dishesRepositoryWaitress(branchId)

        return dishes.map(dish => ({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            description: dish.description,
            ingredients: dish.ingredients,
            image: dish.Dish.image_url
        }))
    }
}