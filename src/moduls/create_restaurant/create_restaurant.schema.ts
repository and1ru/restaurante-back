import z from 'zod'

export const createRestaurantSchema = z.object({
    ownerName: z.string().min(1, "el campo es requerido"),
    nameRestaurant: z.string().min(1, "el campo es requerido"),
    email: z.email().min(1, "el campo es requerido"),
    password: z.string().min(8, "8 length"),
    confirmPassword: z.string().min(8, "8 length")
})

export type createRestaurantType = z.infer<typeof createRestaurantSchema>