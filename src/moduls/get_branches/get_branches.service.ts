import { branchesRepository } from "./get_branches.repository"

export class BranchesService {
    branches = async (restaurantId:number) => {
        return await branchesRepository(restaurantId)
    }
}