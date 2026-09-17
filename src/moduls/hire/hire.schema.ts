import z from 'zod'

export const hireSchema = z.object({
    name: z.string().min(1, "this field is required"),
    email: z.email("must be an email"),
    password: z.string().min(8, "must be at least 8 length"),
    role: z.enum(["ADMIN", "CASHIER", "WAITRESS", "CHEF","RECEPTIONIST"]),
    branch: z.number().int().positive(),
    salary: z.number().positive()
})

export type hireType = z.infer<typeof hireSchema>