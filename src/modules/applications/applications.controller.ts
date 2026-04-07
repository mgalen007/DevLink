import { Request, Response } from "express"
import { ApplicationService } from "./applications.service"
import { type CreateAppDto, type UpdateAppDto } from "./applications.dto"

export class ApplicationController {
    private service = new ApplicationService

    create = async (
        req: Request<{}, {}, CreateAppDto>,
        res: Response
    ) => {
        try {
            const application = await this.service.create(req.body)
            res.status(201).json({ application })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Couldn't create application"
            })
        }
    }

    findAll = async (
        req: Request<{}, {}, {}, { projectId: string }>,
        res: Response
    ) => {
        try {
            const applications = await this.service.findAll(req.query.projectId)
            if (applications.length == 0) {
                return void res.status(200).json({
                    message: "No applications recorded for this project"
                })
            }
            res.status(200).json({ applications })
        } catch(err) {
            console.log(err)
            res.status(500).json({
                error: "Couldn't fetch applications"
            })
        }
    }

    update = async (
        req: Request<{ id: string }, {}, UpdateAppDto>,
        res: Response
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
            console.log(err)
            res.status(500).json({
                error: "Couldn't update application"
            })
        }
    }
}