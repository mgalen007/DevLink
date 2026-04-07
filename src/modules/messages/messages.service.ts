import Message from "./messages.model"
import { type CreateMessageDto, type UpdateMessageDto } from "./messages.dto"
import { Types } from "mongoose"

export class MessageService {
    create = async (message: CreateMessageDto, sender: Types.ObjectId) => {
        const newMessage = await Message.create(message)
        return newMessage
    }

    update = async (id: string, message: UpdateMessageDto) => {
        const newMessage = await Message.findOneAndUpdate(
            { _id: id },
            message,
            { new: true }
        )
        return newMessage
    }

    findAll = async () => {
        const messages = await Message.find()
        return messages
    }

    findOne = async (id: string) => {
        const message = await Message.findOne({ _id: id })
        return message
    }

    remove = async (id: string) => {
        const message = await Message.findOneAndDelete({ _id: id })
        return message
    }
}