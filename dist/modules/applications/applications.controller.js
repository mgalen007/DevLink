"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationController = void 0;
const applications_service_1 = require("./applications.service");
const error_middleware_1 = require("../../middleware/error.middleware");
class ApplicationController {
    service = new applications_service_1.ApplicationService;
    create = async (req, res, next) => {
        try {
            const application = await this.service.create(req.body, req.user.id);
            res.status(201).json({ application });
        }
        catch (err) {
            next(err);
        }
    };
    findAll = async (req, res, next) => {
        try {
            const applications = await this.service.findAll(req.query.projectId);
            if (applications.length == 0) {
                throw new error_middleware_1.AppError("No applications recorded for this project", 200);
            }
            res.status(200).json({ applications });
        }
        catch (err) {
            next(err);
        }
    };
    update = async (req, res, next) => {
        try {
            const newApplication = await this.service.update(req.params.id, req.body);
            res.status(200).json({
                application: newApplication
            });
        }
        catch (err) {
            next(err);
        }
    };
}
exports.ApplicationController = ApplicationController;
//# sourceMappingURL=applications.controller.js.map