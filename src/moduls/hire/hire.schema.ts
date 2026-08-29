import z from 'zod'

export const hireSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string(),
    role: z.enum(["ADMIN", "CASHIER", "WAITRESS", "CHEF","RECEPTIONIST"]),
    branch: z.string()
})

export type hireType = z.infer<typeof hireSchema>