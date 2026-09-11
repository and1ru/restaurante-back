import z from 'zod'

const dishSchema = z.object({
    id: z.number(),
    quantity: z.number()
})

export type dishType = z.infer<typeof dishSchema>

export const orderSchema = z.array(
    z.object({
        id: z.number(),
        quantity: z.number()
    })
)