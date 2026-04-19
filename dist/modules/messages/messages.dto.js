"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMessageSchema = exports.createMessageSchema = void 0;
const zod_1 = require("zod");
exports.createMessageSchema = zod_1.z.object({
    recipient: zod_1.z.string(),
    content: zod_1.z.string()
});
exports.updateMessageSchema = zod_1.z.object({
    recipient: zod_1.z.string().optional(),
    content: zod_1.z.string().optional()
});
//# sourceMappingURL=messages.dto.js.map