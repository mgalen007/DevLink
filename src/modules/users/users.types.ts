import { Document } from "mongoose"

export interface IUser extends Document {
    username: string
    email: string
    password: string
    bio?: string
    skills: string[]
    githubLink?: string
}