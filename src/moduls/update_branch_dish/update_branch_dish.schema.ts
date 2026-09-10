import z from 'zod'

export const updateBranchDishSchema = z.object({
    id: z.number(),
    price: z.number()
})