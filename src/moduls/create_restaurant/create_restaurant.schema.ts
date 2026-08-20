import z from 'zod'

export const createRestaurantSchema = z.object({
    ownerName: z.string(),
    nameRestaurant: z.string().min(1, "el campo es requerido"),
    email: z.email(),
    password: z.string(),
    confirmPassword: z.string()
})

export type createRestaurantType = z.infer<typeof createRestaurantSchema>