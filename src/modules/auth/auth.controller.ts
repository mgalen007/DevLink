import { Request, Response, NextFunction } from "express"
import { AuthService } from "./auth.service"
import { type Credentials } from "./auth.types"
import { type CreateUserDto } from "./auth.dto"
import { AppError } from "../../middleware/error.middleware"

export class AuthController {
    private service = new AuthService

    login = async (
        req: Request<{}, {}, Credentials>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const token = await this.service.login(req.body)
            if (token == "failed") {
                throw new AppError("Invalid username or password", 401)
            }
            res.status(200).json({
                message: "Authentication successful",
                token
            })
        } catch(err) {
            next(err)
        }
    }

    register = async (
        req: Request<{}, {}, CreateUserDto>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const newUser = await this.service.register(req.body)
            res.status(201).json({
                message: "Registration successful",
                user: newUser
            })
        } catch(err) {
            next(err)
        }
    }
}