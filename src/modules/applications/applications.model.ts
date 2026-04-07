import { Schema, model } from "mongoose"
import { type IApplication } from "./applications.types"

const appSchema = new Schema<IApplication>({
    applicant: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    project: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Project"
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"]
    }
}, { timestamps: true })

const Application = model<IApplication>("Application", appSchema)