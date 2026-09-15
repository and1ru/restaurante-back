import { createBranchDishRepository } from "./create_branch_dish.repository"

export class CreateBranchDishService {
    createBranchDish = async (dishId:number, price:number, branchId:number, name:string) => {
        await createBranchDishRepository(price, dishId, branchId, name)
    }
}
