import { z } from "zod"

export const createMessageSchema = z.object({
    recipient: z.string(),
    content: z.string()
})

export const updateMessageSchema = z.object({
    recipient: z.string().optional(),
    content: z.string().optional()
})

export type CreateMessageDto = z.infer<typeof createMessageSchema>
export type UpdateMessageDto = z.infer<typeof updateMessageSchema>
