import { Schema, model, Types } from "mongoose"
import { type IUser } from "./users.types"

const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    bio: { type: String },
    skills: { type: Array(String), required: true },
    githubLink: { type: String }
}, { timestamps: true })

const User = model<IUser>("User", userSchema)

export default User