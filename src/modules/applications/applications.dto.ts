import { z } from "zod"

export const createAppSchema = z.object({
    project: z.string(),
    status: z.enum(["pending", "accepted", "rejected"])
})
export const updateAppSchema = z.object({
    project: z.string().optional(),
    status: z.enum(["pending", "accepted", "rejected"]).optional()
})

export type CreateAppDto = z.infer<typeof createAppSchema>
export type UpdateAppDto = z.infer<typeof updateAppSchema>