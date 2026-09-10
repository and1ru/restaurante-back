import { CustomError } from "../../helper/cutomError"
import { findBranch } from "../Employee/Employee.repository"
import { dishesRepositoryAdmin, dishesRepositoryOwner } from "./get_dishes.repository"

export class DishesService {
    dishes = async (userId: number, userRole: string, restaurantId: number) => {
        if (userRole === "ADMIN") {
            const branch = await findBranch(userId)
            if (!branch) {
                throw new CustomError(404, "no found branch")
            }
            const dishes = await dishesRepositoryAdmin(branch.branchId)
            const result = dishes.map(({ Branch_Dishes, ...dish }) => ({
                    ...dish,
                    is_in_branch: Branch_Dishes.length > 0,
                    price: Branch_Dishes[0]?.price ?? null,
                    branchDishId: Branch_Dishes[0]?.id ?? null
                })).sort((a, b) => Number(b.is_in_branch) - Number(a.is_in_branch));
            return result
        }

        if (userRole === "OWNER") {
            const result = await dishesRepositoryOwner(restaurantId)
            return result
        }
    }
}