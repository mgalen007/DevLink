"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationService = void 0;
const applications_model_1 = __importDefault(require("./applications.model"));
class ApplicationService {
    create = async (application, applicant) => {
        const newApplication = await applications_model_1.default.create({ applicant, ...application });
        return newApplication;
    };
    findAll = async (projectId) => {
        const applications = await applications_model_1.default.find({ project: projectId });
        return applications;
    };
    update = async (id, application) => {
        const newApplication = await applications_model_1.default.findOneAndUpdate({ _id: id }, application, { new: true });
        return newApplication;
    };
}
exports.ApplicationService = ApplicationService;
//# sourceMappingURL=applications.service.js.map