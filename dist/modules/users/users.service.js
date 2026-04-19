"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const users_model_1 = __importDefault(require("./users.model"));
class UserService {
    findOne = async (id) => {
        const user = await users_model_1.default.findOne({ _id: id });
        return {
            username: user.username,
            email: user.email,
            skills: user.skills,
            bio: user.bio,
            githubLink: user.githubLink
        };
    };
    update = async (id, user) => {
        const newUser = await users_model_1.default.findOneAndUpdate({ _id: id }, user, { new: true });
        return {
            username: newUser.username,
            email: newUser.email,
            skills: newUser.skills,
            bio: newUser.bio,
            githubLink: newUser.githubLink
        };
    };
}
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map