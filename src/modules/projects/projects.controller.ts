import { Request, Response } from "express"
import { ProjectService } from "./projects.service"
import { CreateProjectDto, UpdateProjectDto } from "./projects.dto"

export class ProjectController {
    private service = new ProjectService()

    create = async (
        req: Request<{}, {}, CreateProjectDto>,
        res: Response
    ) => {
        try {
            const newProject = await this.service.create(req.body)
            res.status(201).json({
                project: newProject
            })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Couldn't create project"
            })
        }
    }

    findAll = async (
        _req: Request,
        res: Response
    ) => {
        try {
            const projects = await this.service.findAll()
            if (projects.length == 0) {
                return void res.status(200).json({
                    message: "No recorded projects yet"
                })
            }
            res.status(200).json({ projects })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Couldn't fetch projects"
            })
        }
    }

    findOne = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {
        try {
            const project = await this.service.findOne(req.params.id)
            if (!project) {
                return void res.status(404).json({
                    error: "Project not found"
                })
            }
            res.status(200).json({ project })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Couldn't fetch project"
            })
        }
    }

    remove = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {
        try {
            const project = await this.service.remove(req.params.id)
            res.status(204).end()
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Couldn't delete project"
            })
        }
    }

    update = async (
        req: Request<{ id: string }, {}, UpdateProjectDto>,
        res: Response
    ) => {
        try {
            const newProject = await this.service.update(
                req.params.id,
                req.body
            )
            res.status(200).json({
                project: newProject
            })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Couldn't update project"
            })
        }
    }
}