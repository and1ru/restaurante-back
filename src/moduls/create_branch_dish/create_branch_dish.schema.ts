import z from 'zod'

export const createBranchDishSchema = z.object({
    dishId: z.number().int().min(1, "this field is required"),
    price: z.number().positive(),
})