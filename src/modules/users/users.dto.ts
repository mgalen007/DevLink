import { z } from "zod"

export const updateUserSchema = z.object({
    username: z.string().min(4).optional(),
    email: z.email().optional(),
    password: z.string().min(8).optional(),
    bio: z.string().min(12).optional(),
    skills: z.array(z.string()).optional(),
    githubLink: z.string().optional()
})

export type UpdateUserDto = z.infer<typeof updateUserSchema>