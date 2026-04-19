"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = void 0;
const zod_1 = require("zod");
exports.updateUserSchema = zod_1.z.object({
    username: zod_1.z.string().min(4).optional(),
    email: zod_1.z.email().optional(),
    password: zod_1.z.string().min(8).optional(),
    bio: zod_1.z.string().min(12).optional(),
    skills: zod_1.z.array(zod_1.z.string()).optional(),
    githubLink: zod_1.z.string().optional()
});
//# sourceMappingURL=users.dto.js.map