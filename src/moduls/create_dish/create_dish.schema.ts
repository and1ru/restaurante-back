import z from 'zod'

export const createDishSchema = z.object({
    name: z.string().min(1, "this field is required"),
    categoryId: z.number().int().positive()
})

export type createDishType = z.infer<typeof createDishSchema>