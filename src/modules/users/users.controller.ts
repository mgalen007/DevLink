import { UserService } from "./users.service"
import { UpdateUserDto } from "./users.dto"
import { Request, Response } from "express"

export class UserController {
    private service = new UserService

    findOne = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {
        try {
            const user = await this.service.findOne(req.params.id)
            if (!user) {
                return void res.status(404).json({
                    error: "User not found"
                })
            }
            res.status(200).json({
                user
            })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Couldn't fetch user"
            })
        }
    }

    update = async (
        req: Request<{ id: string }, {}, UpdateUserDto>,
        res: Response
    ) => {
        try {
            const newUser = await this.service.update(
                req.params.id,
                req.body
            )
            if (!newUser) {
                return void res.status(404).json({
                    error: "User not found"
                })
            }
            res.status(200).json({
                user: newUser
            })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Couldn't update user"
            })
        }
    }
}