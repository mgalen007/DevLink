import Project from "./projects.model"
import { type CreateProjectDto, UpdateProjectDto } from "./projects.dto"
import { Types } from "mongoose"

export class ProjectService {
    create = async (project: CreateProjectDto, owner: Types.ObjectId) => {
        const newProject = await Project.create({ owner, ...project })
        return newProject
    }

    findAll = async () => {
        const projects = await Project.find()
        return projects
    }

    findOne = async (id: string) => {
        const project = await Project.findOne({ _id: id })
        return project
    }

    remove = async (id: string) => {
        const project = await Project.findOneAndDelete({ _id: id })
        return project
    }

    update = async (id: string, project: UpdateProjectDto) => {
        const newProject = await Project.findOneAndUpdate(
            { _id: id },
            project,
            { new: true }
        )
        return newProject
    }
}