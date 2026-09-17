import { CustomError } from "../../helper/cutomError"
import { uploadImage } from "../../helper/uploadImage"
import { findCategoryByRestaurant, createDishRepository } from "./create_dish.repository"

export class CreateDishService {
    createDish = async ( image:Express.Multer.File, categoryId:number, name:string, restaurantId:number ) => {
        // verificar que la categoria pertenezca a la company
        const existCategoryRestaurant = await findCategoryByRestaurant(categoryId, restaurantId)
        if(!existCategoryRestaurant){
            throw new CustomError(400, "category no belong in restaurant")
        }

        const generateImage = await uploadImage(image.buffer)
        const { secure_url, public_id } = generateImage
        const response = await createDishRepository(public_id, secure_url, name, categoryId, restaurantId)
        // si no se puede crear el dish entonces se tiene que eliminar la imagen de claudinary

    }
}