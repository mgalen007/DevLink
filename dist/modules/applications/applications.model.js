"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const appSchema = new mongoose_1.Schema({
    applicant: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    project: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Project"
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"]
    }
}, { timestamps: true });
const Application = (0, mongoose_1.model)("Application", appSchema);
exports.default = Application;
//# sourceMappingURL=applications.model.js.map