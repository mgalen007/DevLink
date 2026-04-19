"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const error_middleware_1 = require("../../middleware/error.middleware");
class AuthController {
    service = new auth_service_1.AuthService;
    login = async (req, res, next) => {
        try {
            const token = await this.service.login(req.body);
            if (token == "failed") {
                throw new error_middleware_1.AppError("Invalid username or password", 401);
            }
            res.status(200).json({
                message: "Authentication successful",
                token
            });
        }
        catch (err) {
            next(err);
        }
    };
    register = async (req, res, next) => {
        try {
            const newUser = await this.service.register(req.body);
            res.status(201).json({
                message: "Registration successful",
                user: newUser
            });
        }
        catch (err) {
            next(err);
        }
    };
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map