"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const projects_service_1 = require("./projects.service");
const error_middleware_1 = require("../../middleware/error.middleware");
class ProjectController {
    service = new projects_service_1.ProjectService();
    create = async (req, res, next) => {
        try {
            const newProject = await this.service.create(req.body, req.user.id);
            res.status(201).json({
                project: newProject
            });
        }
        catch (err) {
            next(err);
        }
    };
    findAll = async (_req, res, next) => {
        try {
            const projects = await this.service.findAll();
            if (projects.length == 0) {
                throw new error_middleware_1.AppError("No projects recorded yet", 200);
            }
            res.status(200).json({ projects });
        }
        catch (err) {
            next(err);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const project = await this.service.findOne(req.params.id);
            if (!project) {
                throw new error_middleware_1.AppError("Project not found", 404);
            }
            res.status(200).json({ project });
        }
        catch (err) {
            next(err);
        }
    };
    remove = async (req, res, next) => {
        try {
            const project = await this.service.remove(req.params.id);
            res.status(204).end();
        }
        catch (err) {
            next(err);
        }
    };
    update = async (req, res, next) => {
        try {
            const newProject = await this.service.update(req.params.id, req.body);
            res.status(200).json({
                project: newProject
            });
        }
        catch (err) {
            next(err);
        }
    };
}
exports.ProjectController = ProjectController;
//# sourceMappingURL=projects.controller.js.map