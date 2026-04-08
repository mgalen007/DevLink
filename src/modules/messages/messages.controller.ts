import { Request, Response, NextFunction } from "express"
import { MessageService } from "./messages.service"
import { type CreateMessageDto, type UpdateMessageDto } from "./messages.dto"
import { type IMessage } from "./messages.types"
import { AppError } from "../../middleware/error.middleware"
import { type AuthenticatedRequest } from "../../middleware/auth.middleware"

export class MessageController { 
    private service = new MessageService()

    create = async (
        req: AuthenticatedRequest,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const newMessage = await this.service.create(req.body, req.user!.id)
            res.status(201).json({
                message: newMessage
            })
        } catch(err) {
            next(err)
        }
    }

    findAll = async (
        _req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const messages: IMessage[] = await this.service.findAll()
            if (messages.length == 0) {
                throw new AppError("No messages recorded yet", 200)
            }
            res.status(200).json({
                messages
            })
        } catch(err) {
            next(err)
        }
    }

    findOne = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const message = await this.service.findOne(req.params.id)
            if (!message) {
                throw new AppError("Message not found", 404)
            }
            res.status(200).json({
                message
            })
        } catch(err) {
            next(err)
        }
    }

    update = async (
        req: Request<{ id: string }, {}, UpdateMessageDto>,
        res: Response,
        next: NextFunction
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
            next(err)
        }
    }

    remove = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            await this.service.remove(req.params.id)
            res.status(204).end()
        } catch(err) {
            next(err)
        }
    }
}