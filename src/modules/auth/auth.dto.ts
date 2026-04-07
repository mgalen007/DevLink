import { z } from "zod"

export const registerSchema = z.object({
    username: z.string().min(4),
    email: z.email(),
    password: z.string().min(8),
    bio: z.string().min(12).optional(),
    skills: z.array(z.string()),
    githubLink: z.string().optional()
})

export const loginSchema = z.object({
    username: z.string().min(4),
    password: z.string().min(8)
})

export type CreateUserDto = z.infer<typeof registerSchema>
export type UpdateUserDto = z.infer<typeof loginSchema>