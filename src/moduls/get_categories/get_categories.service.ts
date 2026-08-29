import { categoriesRepository } from "./get_categories.repository"

export class CategoriesService {
    categories = async (restaurantId:number) => {
        const result = await categoriesRepository(restaurantId)
        return result
    }
}