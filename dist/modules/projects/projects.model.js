"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: Array(String), required: true },
    owner: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "User" }
}, { timestamps: true });
const Project = (0, mongoose_1.model)("Project", projectSchema);
exports.default = Project;
//# sourceMappingURL=projects.model.js.map