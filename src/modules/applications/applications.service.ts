import Application from "./applications.model"
import { type CreateAppDto, type UpdateAppDto } from "./applications.dto"

export class ApplicationService {
    create = async (application: CreateAppDto) => {
        const newApplication = await Application.create(application)
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