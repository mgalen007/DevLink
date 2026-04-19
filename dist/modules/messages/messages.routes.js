"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messages_controller_1 = require("./messages.controller");
const messages_dto_1 = require("./messages.dto");
const validator_middleware_1 = __importDefault(require("../../middleware/validator.middleware"));
const router = (0, express_1.Router)();
const controller = new messages_controller_1.MessageController();
router.get("/", controller.findAll);
router.post("/", (0, validator_middleware_1.default)(messages_dto_1.createMessageSchema), controller.create);
router.get("/:id", controller.findOne);
router.patch("/:id", (0, validator_middleware_1.default)(messages_dto_1.updateMessageSchema), controller.update);
router.delete("/:id", controller.remove);
exports.default = router;
//# sourceMappingURL=messages.routes.js.map