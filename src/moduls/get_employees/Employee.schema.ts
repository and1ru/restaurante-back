import z from 'zod'

export const employeeSchema = z.object({
    employeeName: z.string().optional(),
    employeeBranchId: z.string().optional(),
    employeeRole: z.enum(["ADMIN", "CASHIER", "CHEF", "RECEPTIONIST", "WAITRESS", ""]).optional()
})

export type employeeType = z.infer<typeof employeeSchema>