import { UserService } from "./users.service"
import { UpdateUserDto } from "./users.dto"
import { Request, Response, NextFunction } from "express"
import { AppError } from "../../middleware/error.middleware"

export class UserController {
    private service = new UserService

    findOne = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const user = await this.service.findOne(req.params.id)
            if (!user) {
                throw new AppError("User not found", 404)
            }
            res.status(200).json({
                user
            })
        } catch(err) {
            next(err)
        }
    }

    update = async (
        req: Request<{ id: string }, {}, UpdateUserDto>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const newUser = await this.service.update(
                req.params.id,
                req.body
            )
            if (!newUser) {
                throw new AppError("User not found", 404)
            }
            res.status(200).json({
                user: newUser
            })
        } catch(err) {
            next(err)
        }
    }
}