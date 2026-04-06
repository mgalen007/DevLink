import { Request, Response } from "express"
import { MessageService } from "./messages.service"
import { type CreateMessageDto, type UpdateMessageDto } from "./messages.dto"
import { type IMessage } from "./messages.types"


export class MessageController { 
    private service = new MessageService()

    create = async (
        req: Request<{}, {}, CreateMessageDto>,
        res: Response
    ) => {
        try {
            const newMessage = await this.service.create(req.body)
            res.status(201).json({
                message: newMessage
            })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Couldn't create message"
            })
        }
    }

    findAll = async (
        _req: Request,
        res: Response
    ) => {
        try {
            const messages: IMessage[] = await this.service.findAll()
            if (messages.length == 0) {
                return void res.status(200).json({
                    error: "No messages recorded yet"
                })
            }
            res.status(200).json({
                messages
            })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Couldn't fetch messages"
            })
        }
    }

    findOne = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {
        try {
            const message = await this.service.findOne(req.params.id)
            if (!message) {
                return void res.status(404).json({
                    error: "Message not found"
                })
            }
            res.status(200).json({
                message
            })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Couldn't find message"
            })
        }
    }

    update = async (
        req: Request<{ id: string }, {}, UpdateMessageDto>,
        res: Response
    ) => {
        try {
            const newMessage = await this.service.update(
                req.params.id,
                req.body
            )
            res.status(200).json({
                message: newMessage
            })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Couldn't update message"
            })
        }
    }

    remove = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {
        try {
            await this.service.remove(req.params.id)
            res.status(204).end()
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Coudln't delete message"
            })
        }
    }
}