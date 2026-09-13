import { uploadImage } from "../../helper/uploadImage"
import { createDishRepository } from "./create_dish.repository"

export class CreateDishService {
    createDish = async (image:Express.Multer.File,category:number, name:string, restaurantId:number) => {
        const generateImage = await uploadImage(image.buffer)
        const { secure_url, public_id } = generateImage
        await createDishRepository(public_id, secure_url, name, category, restaurantId)
        return
    }
}