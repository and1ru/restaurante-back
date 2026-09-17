import z from 'zod'

export const createCategorySchema = z.object({
    // trim no permite que hayan espacios en blanco al inicio ni al final
    name: z.string().trim().min(1, "this field is required")
})

export type createCategoryType = z.infer<typeof createCategorySchema>