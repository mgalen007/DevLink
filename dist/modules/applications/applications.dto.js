"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAppSchema = exports.createAppSchema = void 0;
const zod_1 = require("zod");
exports.createAppSchema = zod_1.z.object({
    project: zod_1.z.string(),
    status: zod_1.z.enum(["pending", "accepted", "rejected"])
});
exports.updateAppSchema = zod_1.z.object({
    project: zod_1.z.string().optional(),
    status: zod_1.z.enum(["pending", "accepted", "rejected"]).optional()
});
//# sourceMappingURL=applications.dto.js.map