import { Request, Response, NextFunction } from "express"
import { ApplicationService } from "./applications.service"
import { type CreateAppDto, type UpdateAppDto } from "./applications.dto"
import { AppError } from "../../middleware/error.middleware"
import { type AuthenticatedRequest } from "../../middleware/auth.middleware"

export class ApplicationController {
    private service = new ApplicationService

    create = async (
        req: AuthenticatedRequest,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const application = await this.service.create(req.body, req.user!.id)
            res.status(201).json({ application })
        } catch(err) {
            next(err)
        }
    }

    findAll = async (
        req: Request<{}, {}, {}, { projectId: string }>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const applications = await this.service.findAll(req.query.projectId)
            if (applications.length == 0) {
                throw new AppError("No applications recorded for this project", 200)
            }
            res.status(200).json({ applications })
        } catch(err) {
            next(err)
        }
    }

    update = async (
        req: Request<{ id: string }, {}, UpdateAppDto>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const newApplication = await this.service.update(
                req.params.id,
                req.body
            )
            res.status(200).json({
                application: newApplication
            })
        } catch(err) {
            next(err)
        }
    }
}