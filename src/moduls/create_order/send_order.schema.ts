import z from 'zod'

const dishSchema = z.object({
    branchDishId: z.number().int().positive(),
    quantity: z.number().positive().int(),
})

export type dishType = z.infer<typeof dishSchema>

export const orderSchema = z.array(dishSchema).min(1, "order must contain at least one dish")