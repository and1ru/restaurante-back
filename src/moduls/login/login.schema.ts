import z from 'zod'

export const loginSchema = z.object({
    email: z.email("must be an email").min(1,"is required"),
    password: z.string().min(8, "min 8 length")
})

export type loginType = z.infer<typeof loginSchema>