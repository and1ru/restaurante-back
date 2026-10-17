import z from 'zod'

export const createDishSchema = z.object({
    name: z.string().min(1, "this field is required"),
    category: z.string(),
    description: z.string()
})

export type createDishType = z.infer<typeof createDishSchema>