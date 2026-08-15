import z from 'zod'

export const createBranchSchema = z.object({
    country: z.string().min(1, "el campo es requerido"),
    city: z.string().min(1, "el campo es requerido"),
    address: z.string().min(1, "el campo es requerido"),
    table: z.number().min(1, "debe poner almenos 1")
})

export type createBranchType = z.infer<typeof createBranchSchema>