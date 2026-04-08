import User from "./users.model"
import { UpdateUserDto } from "./users.dto"

export class UserService {
    findOne = async (id: string) => {
        const user = await User.findOne({ _id: id })
        return {
            username: user!.username,
            email: user!.email,
            skills: user!.skills,
            bio: user!.bio,
            githubLink: user!.githubLink
        }
    }

    update = async (id: string, user: UpdateUserDto) => {
        const newUser = await User.findOneAndUpdate(
            { _id: id },
            user,
            { new: true }
        )
        return {
            username: newUser!.username,
            email: newUser!.email,
            skills: newUser!.skills,
            bio: newUser!.bio,
            githubLink: newUser!.githubLink
        }
    }
}