"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const applications_controller_1 = require("./applications.controller");
const applications_dto_1 = require("./applications.dto");
const validator_middleware_1 = __importDefault(require("../../middleware/validator.middleware"));
const router = (0, express_1.Router)();
const controller = new applications_controller_1.ApplicationController;
router.post("/", (0, validator_middleware_1.default)(applications_dto_1.createAppSchema), controller.create);
router.get("/", controller.findAll);
router.patch("/:id", (0, validator_middleware_1.default)(applications_dto_1.updateAppSchema), controller.update);
exports.default = router;
//# sourceMappingURL=applications.routes.js.map