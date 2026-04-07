export interface CreateUserDto {
    username: string
    email: string
    password: string
    bio?: string
    skills: string[]
    githubLink?: string
}

export interface UpdateUserDto {
    username?: string
    email?: string
    password?: string
    bio?: string
    skills: string[]
    githubLink?: string
}