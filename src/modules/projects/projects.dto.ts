import { z } from "zod"

export const createProjectSchema = z.object({
    title: z.string().min(5),
    description: z.string().min(8),
    techStack: z.array(z.string())
})

export const updateProjectSchema = z.object({
    title: z.string().min(5).optional(),
    description: z.string().min(8).optional(),
    techStack: z.array(z.string()).optional()
})

export type CreateProjectDto = z.infer<typeof createProjectSchema>
export type UpdateProjectDto = z.infer<typeof updateProjectSchema>