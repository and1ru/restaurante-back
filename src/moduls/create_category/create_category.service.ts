import { createCategoryRepository } from "./create_category.repository"

export class CreateCategoryService{
    createCategory = async (name:string, restaurantId:number) => {
        await createCategoryRepository(name, restaurantId)
    }
}