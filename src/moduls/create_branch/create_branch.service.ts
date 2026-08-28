import { createBranchRepository } from "./create_branch.repository"

export class CreateBranchService {
    createBranch = async (name:string, address:string, city:string, country:string, table:number, restaurantId:number) => {
        await createBranchRepository(name, address, city, country, table, restaurantId)
    }
}