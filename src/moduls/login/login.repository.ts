import { prisma } from "../../../lib/prisma"

export const loginRepository = async (email:string) => {
    return await prisma.users.findUnique({
  where: { email },
  select: {
    id: true,
    name: true,
    role: true,
    password: true,
    restaurant_id: true,
    branch_id: true,
  },
})
}