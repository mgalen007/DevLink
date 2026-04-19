"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const projects_model_1 = __importDefault(require("./projects.model"));
class ProjectService {
    create = async (project, owner) => {
        const newProject = await projects_model_1.default.create({ owner, ...project });
        return newProject;
    };
    findAll = async () => {
        const projects = await projects_model_1.default.find();
        return projects;
    };
    findOne = async (id) => {
        const project = await projects_model_1.default.findOne({ _id: id });
        return project;
    };
    remove = async (id) => {
        const project = await projects_model_1.default.findOneAndDelete({ _id: id });
        return project;
    };
    update = async (id, project) => {
        const newProject = await projects_model_1.default.findOneAndUpdate({ _id: id }, project, { new: true });
        return newProject;
    };
}
exports.ProjectService = ProjectService;
//# sourceMappingURL=projects.service.js.map