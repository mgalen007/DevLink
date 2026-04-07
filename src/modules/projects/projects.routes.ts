import { Router } from "express"
import { ProjectController } from "./projects.controller"
import { createProjectSchema, updateProjectSchema } from "./projects.dto"
import validate from "../../middleware/validator.middleware"

const router = Router()
const controller = new ProjectController()

router.post("/", validate(createProjectSchema), controller.create)
router.get("/", controller.findAll)
router.get("/:id", controller.findOne)
router.patch("/:id", validate(updateProjectSchema), controller.update)
router.delete("/:id", controller.remove)

export default router