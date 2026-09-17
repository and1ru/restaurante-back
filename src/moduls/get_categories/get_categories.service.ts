import { categoriesRepository } from "./get_categories.repository"

export class CategoriesService {
    categories = async (restaurantId:number) => {
        return await categoriesRepository(restaurantId)
    }
}