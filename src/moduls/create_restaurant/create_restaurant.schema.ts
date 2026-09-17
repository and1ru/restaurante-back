import z from 'zod'

export const createRestaurantSchema = z.object({
    ownerName: z.string().trim().min(1, "this field is required"),
    nameRestaurant: z.string().trim().min(1, "this field is required"),
    email: z.email("must be an email"),
    password: z.string().min(8, "must be at least 8 length")
})

export type createRestaurantType = z.infer<typeof createRestaurantSchema>