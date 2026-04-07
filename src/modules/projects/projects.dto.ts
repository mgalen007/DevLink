import { IProject } from "./projects.types"

export interface CreateProjectDto extends IProject {}
export type UpdateProjectDto = Partial<IProject>