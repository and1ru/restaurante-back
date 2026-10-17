import { CustomError } from "../../helper/cutomError"
import { hashPassword } from "../../helper/hashPassword"
import { findUserByEmail } from "../../shared/repositories/findUserByEmail.repository"
import { CreateRestaurantRepository } from "./create_restaurant.repository"

export class CreateRestaurantService{
    createRestaurant = async (ownerName:string, nameRestaurant:string, email:string, password:string) => {
        const user = await findUserByEmail(email)
        if(user){
            throw new CustomError(409, "email already used")
        }
        
        const hashedPassword = await hashPassword(password)

        await CreateRestaurantRepository(ownerName, nameRestaurant, email, hashedPassword)
    }
}