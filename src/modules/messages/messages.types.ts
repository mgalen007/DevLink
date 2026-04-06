import { Types, Document } from "mongoose"

export interface IMessage extends Document {
    sender: Types.ObjectId,
    recipient: Types.ObjectId,
    sessionID: Types.ObjectId,
    content: string
}