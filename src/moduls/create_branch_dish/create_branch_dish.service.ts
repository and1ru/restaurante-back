import { CustomError } from "../../helper/cutomError"
import { createBranchDishRepository, findDishBranch, findDishByRestaurantId, findRestaurantByBranch } from "./create_branch_dish.repository"

export class CreateBranchDishService {
    createBranchDish = async (dishId:number, price:number, branchId:number, restaurantId:number) => {
        // validar que la branch pertenezca al restaurant
        const branchRestaurant = await findRestaurantByBranch(branchId, restaurantId)
        if(!branchRestaurant){
            throw new CustomError(403, "CAN'T CREATE A BRANCH DISH IN ANOTHER RESTAURANT")
        }

        // validar que el dish pertenezca al restaurant
        const dishInRestaurant = await findDishByRestaurantId(dishId, restaurantId)
        if(!dishInRestaurant){
            throw new CustomError(403, "CAN'T CREATE A BRANCH DISH")
        }

        // si el dishId y branchId ya existen error
        const existDishBranch = await findDishBranch(dishId, branchId)
        if(existDishBranch){
            throw new CustomError(409, "DISH ALREADY EXIST")
        }

        const { name } = dishInRestaurant
        
        await createBranchDishRepository(price, dishId, branchId, name)
    }
}