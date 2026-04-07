import { Types, Document } from "mongoose"

export interface IProject extends Document {
    title: string
    description: string
    techStack: string[]
    owner: Types.ObjectId
}