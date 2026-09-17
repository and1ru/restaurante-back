import z from 'zod'

export const updateOrderSchema = z.object({
    id: z.number().int().positive()
})