import { prisma } from "../../../lib/prisma"

export const loginRepository = async (email:string) => {
    return await prisma.users.findUnique({where:{email}})
}