import { dishesRepositoryAdmin } from "./dishes_admin.repository"

export class DishesService {
    dishes = async (branchId: number, restaurantId: number) => {
        const dishes = await dishesRepositoryAdmin(branchId, restaurantId)

        const result = dishes.map(dish => {
            const branchDish = dish.Branch_Dishes[0]

            return {
                id: dish.id,
                name: dish.name,
                image_url: dish.image_url,
                price: branchDish
                    ? Number(branchDish.price)
                    : null,
                branchDishId: branchDish?.id ?? null,
                inBranch: !!branchDish
            }
        })

        return result.sort((a, b) => {
            if (a.inBranch !== b.inBranch) {
                return Number(b.inBranch) - Number(a.inBranch)
            }

            return a.name.localeCompare(b.name)
        })
    }
}