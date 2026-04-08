import { Request, Response, NextFunction } from "express"
import { ProjectService } from "./projects.service"
import { CreateProjectDto, UpdateProjectDto } from "./projects.dto"
import { AppError } from "../../middleware/error.middleware"
import { type AuthenticatedRequest } from "../../middleware/auth.middleware"

export class ProjectController {
    private service = new ProjectService()

    create = async (
        req: AuthenticatedRequest,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const newProject = await this.service.create(req.body, req.user!.id)
            res.status(201).json({
                project: newProject
            })
        } catch(err) {
            next(err)
        }
    }

    findAll = async (
        _req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const projects = await this.service.findAll()
            if (projects.length == 0) {
                throw new AppError("No projects recorded yet", 200)
            }
            res.status(200).json({ projects })
        } catch(err) {
            next(err)
        }
    }

    findOne = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const project = await this.service.findOne(req.params.id)
            if (!project) {
                throw new AppError("Project not found", 404)
            }
            res.status(200).json({ project })
        } catch(err) {
            next(err)
        }
    }

    remove = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const project = await this.service.remove(req.params.id)
            res.status(204).end()
        } catch(err) {
            next(err)
        }
    }

    update = async (
        req: Request<{ id: string }, {}, UpdateProjectDto>,
        res: Response,
        next: NextFunction
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
            next(err)
        }
    }
}