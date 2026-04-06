import { IMessage } from "./messages.types"

export interface CreateMessageDto extends IMessage {}
export type UpdateMessageDto = Partial<IMessage>