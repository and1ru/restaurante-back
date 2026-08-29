import { branchesRepository } from "./get_branches.repository"

export class BranchesService {
    branches = async (restaurantId:number) => {
        const result = await branchesRepository(restaurantId)
        return result
    }
}