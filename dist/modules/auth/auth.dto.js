"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    username: zod_1.z.string().min(4),
    email: zod_1.z.email(),
    password: zod_1.z.string().min(8),
    bio: zod_1.z.string().min(12).optional(),
    skills: zod_1.z.array(zod_1.z.string()),
    githubLink: zod_1.z.string().optional()
});
exports.loginSchema = zod_1.z.object({
    username: zod_1.z.string().min(4),
    password: zod_1.z.string().min(8)
});
//# sourceMappingURL=auth.dto.js.map