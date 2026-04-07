import User from "./users.model"
import { UpdateUserDto } from "./users.dto"

export class UserService {
    findOne = async (id: string) => {
        const user = await User.findOne({ _id: id })
        return user
    }

    update = async (id: string, user: UpdateUserDto) => {
        const newUser = await User.findOneAndUpdate(
            { _id: id },
            user,
            { new: true }
        )
        return newUser
    }
}