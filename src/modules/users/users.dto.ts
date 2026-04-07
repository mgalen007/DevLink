import { type IUser } from "./users.types"

export interface CreateUserDto extends IUser {}
export type UpdateUserDto = Partial<IUser>