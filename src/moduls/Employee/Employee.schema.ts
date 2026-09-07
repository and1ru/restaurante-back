import z from 'zod'

export const filterEmployee = z.object({
    name: z.string(),
    role: z.enum(["ADMIN", "CASHIER", "WAITRESS", "CHEF","RECEPTIONIST", ""]),
    branch: z.string(),
})

export type filterEmployeeType = z.infer<typeof filterEmployee>