"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    statusCode;
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}
exports.AppError = AppError;
const error = (err, _req, res, _next) => {
    console.error(err);
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    const message = err.message || "An error occurred, try again later";
    res.status(statusCode).json({
        success: false,
        error: message,
    });
};
exports.default = error;
//# sourceMappingURL=error.middleware.js.map