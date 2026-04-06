import { Router } from "express"
import { MessageController } from "./messages.controller"

const router = Router()
const controller = new MessageController()

router.get("/", controller.findAll)
router.post("/", controller.create)
router.get("/:id", controller.findOne)
router.patch("/:id", controller.update)
router.delete("/:id", controller.remove)

export default router 