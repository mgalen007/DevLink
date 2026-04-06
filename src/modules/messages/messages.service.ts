import Message from "./messages.model"
import { IMessage } from "./messages.types"


export class MessageService {
    async create(message: IMessage) {
        const newMessage = await Message.create(message)
        return message
    }

    async update(id: string, message: Partial<IMessage>) {
        const newMessage = await Message.findOneAndUpdate(
            { _id: id },
            message,
            { new: true }
        )
        return newMessage
    }

    async findAll() {
        const messages = await Message.find()
        return messages
    }

    async findOne(id: string) {
        const message = await Message.findOne({ _id: id })
        return message
    }

    async remove(id: string) {
        const message = await Message.findOneAndDelete({ _id: id })
        return
    }
}