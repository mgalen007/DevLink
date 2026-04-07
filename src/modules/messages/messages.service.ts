import Message from "./messages.model"
import { IMessage } from "./messages.types"


export class MessageService {
    create = async (message: IMessage) => {
        const newMessage = await Message.create(message)
        return message
    }

    update = async (id: string, message: Partial<IMessage>) => {
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