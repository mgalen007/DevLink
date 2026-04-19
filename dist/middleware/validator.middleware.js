"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_middleware_1 = require("./error.middleware");
const validate = (schema, location = "body") => {
    return (req, _res, next) => {
        try {
            const result = schema.safeParse(req[location]);
            if (!result.success) {
                const message = result.error.issues
                    .map((issue) => {
                    const key = issue.path.length ? issue.path.join(".") : "input";
                    return `${key} ${issue.message}`;
                })
                    .join(", ");
                throw new error_middleware_1.AppError(message, 400);
            }
            req[location] = result.data;
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
exports.default = validate;
//# sourceMappingURL=validator.middleware.js.map