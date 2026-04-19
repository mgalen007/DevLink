"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const users_model_1 = __importDefault(require("../users/users.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class AuthService {
    register = async (user) => {
        const hash = await bcryptjs_1.default.hash(user.password, 10);
        user.password = hash;
        const newUser = await users_model_1.default.create(user);
        return {
            username: newUser.username,
            email: newUser.email,
            bio: newUser.bio ?? "",
            skills: newUser.skills ?? [],
            githubLink: newUser.githubLink ?? ""
        };
    };
    login = async (user) => {
        const validUser = await users_model_1.default.findOne({ username: user.username });
        let isValid = await bcryptjs_1.default.compare(user.password, validUser.password);
        if (isValid) {
            const token = jsonwebtoken_1.default.sign({ id: validUser._id, username: validUser.username, email: validUser.email }, process.env.JWT_SECRET_KEY, { expiresIn: "3d" });
            return token;
        }
        return "failed";
    };
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map