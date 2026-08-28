import { hashPassword } from "../../helper/hashPassword"
import { CreateRestaurantRepository } from "./create_restaurant.repository"

export class CreateRestaurantService{
    createRestaurant = async (ownerName:string, nameRestaurant:string, email:string, password:string) => {
        // verificar que no haya usuarios con el email
        // hash password
        const hashedPassword = await hashPassword(password)

        await CreateRestaurantRepository(ownerName, nameRestaurant, email, hashedPassword)
    }
}