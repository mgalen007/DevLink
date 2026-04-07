import { type CreateUserDto } from "./auth.dto"
import { type Credentials } from "./auth.types"
import User from "../users/users.model"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export class AuthService {
    register = async (user: CreateUserDto) => {
        const hash = await bcrypt.hash(user.password, 10)
        user.password = hash
        const newUser = await User.create(user)
        return {
            username: newUser.username,
            email: newUser.email,
            bio: newUser.bio ?? "",
            skills: newUser.skills ?? [],
            githubLink: newUser.githubLink ?? ""
        }
    }

    login = async (user: Credentials) => {
        const validUser = await User.findOne({ username: user.username })
        let isValid = await bcrypt.compare(user.password, validUser!.password)
        if (isValid) {
            const token = jwt.sign(
                { id: validUser!._id, username: validUser!.username, email: validUser!.email },
                process.env.JWT_SECRET_KEY!,
                { expiresIn: "3d" }
            )
            return token
        }
        return "failed"
    }
}