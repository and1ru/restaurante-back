import { updateBranchDish } from "./update_branch_dish.repository"

export class UpdateBranchDishService {
    updateBranchDish = async (id:number, price:number) => {
        await updateBranchDish(id, price)
        return
    }
}