import { Types, Document } from "mongoose"

export interface IApplication extends Document {
    applicant: Types.ObjectId
    project: Types.ObjectId,
    status: "pending" | "accepted" | "rejected"
}