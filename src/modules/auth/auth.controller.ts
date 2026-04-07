import { Request, Response } from "express"
import { AuthService } from "./auth.service"
import { type Credentials } from "./auth.types"
import { type CreateUserDto } from "./auth.dto"

export class AuthController {
    private service = new AuthService

    login = async (
        req: Request<{}, {}, Credentials>,
        res: Response
    ) => {
        try {
            const token = await this.service.login(req.body)
            if (token == "failed") {
                return void res.status(401).json({
                    error: "Invalid username or password"
                })
            }
            res.status(200).json({
                message: "Authentication successful",
                token
            })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Login failed, try again later"
            })
        }
    }

    register = async (
        req: Request<{}, {}, CreateUserDto>,
        res: Response
    ) => {
        try {
            const newUser = await this.service.register(req.body)
            res.status(201).json({
                message: "Registration successful",
                user: newUser
            })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Registration failed, try again later"
            })
        }
    }
}