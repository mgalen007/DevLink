"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projects_controller_1 = require("./projects.controller");
const projects_dto_1 = require("./projects.dto");
const validator_middleware_1 = __importDefault(require("../../middleware/validator.middleware"));
const router = (0, express_1.Router)();
const controller = new projects_controller_1.ProjectController();
router.post("/", (0, validator_middleware_1.default)(projects_dto_1.createProjectSchema), controller.create);
router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.patch("/:id", (0, validator_middleware_1.default)(projects_dto_1.updateProjectSchema), controller.update);
router.delete("/:id", controller.remove);
exports.default = router;
//# sourceMappingURL=projects.routes.js.map