import { dishesRepositoryOwner } from "./dishes_owner.repository"

export class DishesService {
    dishes = async ( restaurantId: number) => {
            return await dishesRepositoryOwner(restaurantId)
    }
}