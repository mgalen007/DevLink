"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const auth_dto_1 = require("./auth.dto");
const validator_middleware_1 = __importDefault(require("../../middleware/validator.middleware"));
const router = (0, express_1.Router)();
const controller = new auth_controller_1.AuthController;
router.post("/login", (0, validator_middleware_1.default)(auth_dto_1.loginSchema), controller.login);
router.post("/register", (0, validator_middleware_1.default)(auth_dto_1.registerSchema), controller.register);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map