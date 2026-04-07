import { Router } from "express"
import { ProjectController } from "./projects.controller"

const router = Router()
const controller = new ProjectController()

router.post("/", controller.create)
router.get("/", controller.findAll)
router.get("/:id", controller.findOne)
router.patch("/:id", controller.update)
router.delete("/:id", controller.remove)

export default router