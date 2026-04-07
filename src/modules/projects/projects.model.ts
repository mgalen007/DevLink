import { Schema, model } from "mongoose"
import { type IProject } from "./projects.types"

const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: Array(String), required: true },
    owner: { type: Schema.Types.ObjectId, required: true, ref: "User" }
}, { timestamps: true })

const Project = model<IProject>("Project", projectSchema)

export default Project

