import Application from "./applications.model"
import { type CreateAppDto, type UpdateAppDto } from "./applications.dto"
import { Types } from "mongoose"

export class ApplicationService {
    create = async (application: CreateAppDto, applicant: Types.ObjectId) => {
        const newApplication = await Application.create({ applicant, ...application })
        return newApplication
    }

    findAll = async (projectId: string) => {
        const applications = await Application.find({ project: projectId })
        return applications
    }

    update = async (id: string, application: UpdateAppDto) => {
        const newApplication = await Application.findOneAndUpdate(
            { _id: id },
            application,
            { new: true }
        )
        return newApplication
    }
}