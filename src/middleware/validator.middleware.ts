import { Request, Response, NextFunction } from "express"
import { ZodObject } from "zod"
import { AppError } from "./error.middleware"

type RequestLocation = "body" | "params" | "query" 

const validate = (schema: ZodObject, location: RequestLocation = "body") => {
    return (
        req: Request,
        _res: Response,
        next: NextFunction
    ) => {
        try {
            const result = schema.safeParse(req[location])
            if (!result.success) {
                let message = result.error.issues.map(issue => issue.message).join(", ")
                throw new AppError(message, 400)
            }
            req[location] = result.data
            next()
        } catch(err) {
            next(err)
        }
    }
}

export default validate