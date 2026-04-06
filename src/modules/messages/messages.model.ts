import { Schema, model } from "mongoose"
import { type IMessage } from "./messages.types"

const messageSchema = new Schema<IMessage>({
    sender: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    recipient: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    content: { type: String, required: true } 
}, { timestamps: true })

const Message = model<IMessage>("Message", messageSchema)

export default Message