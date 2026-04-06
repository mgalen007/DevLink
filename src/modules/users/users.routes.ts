import { Router } from "express"
import { UserController } from "./users.controller"

const router = Router()
const controller = new UserController

router.get("/:id", controller.findOne)
router.patch("/:id", controller.update)

export default router