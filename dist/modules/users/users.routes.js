"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("./users.controller");
const users_dto_1 = require("./users.dto");
const validator_middleware_1 = __importDefault(require("../../middleware/validator.middleware"));
const router = (0, express_1.Router)();
const controller = new users_controller_1.UserController;
router.get("/:id", controller.findOne);
router.patch("/:id", (0, validator_middleware_1.default)(users_dto_1.updateUserSchema), controller.update);
exports.default = router;
//# sourceMappingURL=users.routes.js.map