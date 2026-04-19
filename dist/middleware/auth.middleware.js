"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const error_middleware_1 = require("./error.middleware");
dotenv_1.default.config();
const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            throw new error_middleware_1.AppError("No token provided", 401);
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    }
    catch (err) {
        console.log(err);
        if (err instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            return void res.status(401).json({
                error: "Invalid token",
            });
        }
        next(err);
    }
};
exports.default = auth;
//# sourceMappingURL=auth.middleware.js.map