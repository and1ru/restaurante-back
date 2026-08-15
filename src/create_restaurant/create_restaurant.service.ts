import { CreateRestaurantRepository } from "./create_restaurant.repository"

export class CreateRestaurantService{
    constructor(){}
    createRestaurant = async (ownerName:string, nameRestaurant:string, email:string, password:string) => {
        try {
            await CreateRestaurantRepository(ownerName, nameRestaurant, email, password)
        } catch (error) {
            console.error(error)
        }
    }
}