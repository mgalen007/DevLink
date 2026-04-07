import { Router } from "express"
import { MessageController } from "./messages.controller"
import { createMessageSchema, updateMessageSchema } from "./messages.dto"
import validate from "../../middleware/validator.middleware"

const router = Router()
const controller = new MessageController()

router.get("/", controller.findAll)
router.post("/", validate(createMessageSchema), controller.create)
router.get("/:id", controller.findOne)
router.patch("/:id", validate(updateMessageSchema), controller.update)
router.delete("/:id", controller.remove)

export default router 