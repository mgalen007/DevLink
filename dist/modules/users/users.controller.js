"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const users_service_1 = require("./users.service");
const error_middleware_1 = require("../../middleware/error.middleware");
class UserController {
    service = new users_service_1.UserService;
    findOne = async (req, res, next) => {
        try {
            const user = await this.service.findOne(req.params.id);
            if (!user) {
                throw new error_middleware_1.AppError("User not found", 404);
            }
            res.status(200).json({
                user
            });
        }
        catch (err) {
            next(err);
        }
    };
    update = async (req, res, next) => {
        try {
            const newUser = await this.service.update(req.params.id, req.body);
            if (!newUser) {
                throw new error_middleware_1.AppError("User not found", 404);
            }
            res.status(200).json({
                user: newUser
            });
        }
        catch (err) {
            next(err);
        }
    };
}
exports.UserController = UserController;
//# sourceMappingURL=users.controller.js.map