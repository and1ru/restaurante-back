import z from 'zod'

export const createBranchDishSchema = z.object({
    id: z.number(),
    price: z.number()
})