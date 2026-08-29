import z from 'zod'

const responseSchema = z.object({
    id: z.number(),
    name: z.string(),
    city: z.string()
})

export type responseType = z.infer<typeof responseSchema>