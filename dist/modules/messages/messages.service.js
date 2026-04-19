"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const messages_model_1 = __importDefault(require("./messages.model"));
class MessageService {
    create = async (message, sender) => {
        const newMessage = await messages_model_1.default.create({ sender, ...message });
        return newMessage;
    };
    update = async (id, message) => {
        const newMessage = await messages_model_1.default.findOneAndUpdate({ _id: id }, message, { new: true });
        return newMessage;
    };
    findAll = async () => {
        const messages = await messages_model_1.default.find();
        return messages;
    };
    findOne = async (id) => {
        const message = await messages_model_1.default.findOne({ _id: id });
        return message;
    };
    remove = async (id) => {
        const message = await messages_model_1.default.findOneAndDelete({ _id: id });
        return message;
    };
}
exports.MessageService = MessageService;
//# sourceMappingURL=messages.service.js.map