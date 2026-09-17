import z from 'zod'

export const filterEmployee = z.object({
    name: z.string().optional(),
    role: z.enum(["ADMIN", "CASHIER", "WAITRESS", "CHEF","RECEPTIONIST"]).optional(),
    branch: z.string().optional(),
})

export type filterEmployeeType = z.infer<typeof filterEmployee>