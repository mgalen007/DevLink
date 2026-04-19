"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectSchema = exports.createProjectSchema = void 0;
const zod_1 = require("zod");
exports.createProjectSchema = zod_1.z.object({
    title: zod_1.z.string().min(5),
    description: zod_1.z.string().min(8),
    techStack: zod_1.z.array(zod_1.z.string())
});
exports.updateProjectSchema = zod_1.z.object({
    title: zod_1.z.string().min(5).optional(),
    description: zod_1.z.string().min(8).optional(),
    techStack: zod_1.z.array(zod_1.z.string()).optional()
});
//# sourceMappingURL=projects.dto.js.map