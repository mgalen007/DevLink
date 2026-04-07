import { type IApplication } from "./applications.types"

export interface CreateAppDto extends IApplication {}
export type UpdateAppDto = Partial<IApplication>