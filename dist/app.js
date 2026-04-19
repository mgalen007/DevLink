"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const messages_routes_1 = __importDefault(require("./modules/messages/messages.routes"));
const users_routes_1 = __importDefault(require("./modules/users/users.routes"));
const projects_routes_1 = __importDefault(require("./modules/projects/projects.routes"));
const applications_routes_1 = __importDefault(require("./modules/applications/applications.routes"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const auth_middleware_1 = __importDefault(require("./middleware/auth.middleware"));
const error_middleware_1 = __importDefault(require("./middleware/error.middleware"));
// Express instance
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use((0, helmet_1.default)());
// Health-check endpoint
app.get("/api/health-check", (_req, res) => {
    res.status(200).json({
        status: "OK",
        name: "DevLink API"
    });
});
// Mount routers
app.use("/api/messages", auth_middleware_1.default, messages_routes_1.default);
app.use("/api/users", auth_middleware_1.default, users_routes_1.default);
app.use("/api/projects", auth_middleware_1.default, projects_routes_1.default);
app.use("/api/applications", auth_middleware_1.default, applications_routes_1.default);
app.use("/api/auth", auth_routes_1.default);
// Error middleware
app.use(error_middleware_1.default);
// Export the instance
exports.default = app;
//# sourceMappingURL=app.js.map