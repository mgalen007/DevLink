"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const messages_service_1 = require("./messages.service");
const error_middleware_1 = require("../../middleware/error.middleware");
class MessageController {
    service = new messages_service_1.MessageService();
    create = async (req, res, next) => {
        try {
            const newMessage = await this.service.create(req.body, req.user.id);
            res.status(201).json({
                message: newMessage
            });
        }
        catch (err) {
            next(err);
        }
    };
    findAll = async (_req, res, next) => {
        try {
            const messages = await this.service.findAll();
            if (messages.length == 0) {
                throw new error_middleware_1.AppError("No messages recorded yet", 200);
            }
            res.status(200).json({
                messages
            });
        }
        catch (err) {
            next(err);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const message = await this.service.findOne(req.params.id);
            if (!message) {
                throw new error_middleware_1.AppError("Message not found", 404);
            }
            res.status(200).json({
                message
            });
        }
        catch (err) {
            next(err);
        }
    };
    update = async (req, res, next) => {
        try {
            const newMessage = await this.service.update(req.params.id, req.body);
            res.status(200).json({
                message: newMessage
            });
        }
        catch (err) {
            next(err);
        }
    };
    remove = async (req, res, next) => {
        try {
            await this.service.remove(req.params.id);
            res.status(204).end();
        }
        catch (err) {
            next(err);
        }
    };
}
exports.MessageController = MessageController;
//# sourceMappingURL=messages.controller.js.map