import { CustomError } from "../../helper/cutomError"
import { createBranchDishRepository, findBranch } from "./create_branch_dish.repository"

export class CreateBranchDishService {
    createBranchDish = async (dishId:number, price:number, userId:number) => {
        const branch = await findBranch(userId)
        if(!branch){
            throw new CustomError(404, "no found branch")
        }

        await createBranchDishRepository(price, dishId, branch.branchId)
    }
}