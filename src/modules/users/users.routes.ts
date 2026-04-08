import { Router } from "express"
import { UserController } from "./users.controller"
import { updateUserSchema } from "./users.dto"
import validate from "../../middleware/validator.middleware"

const router = Router()
const controller = new UserController

router.get("/:id", controller.findOne)
router.patch("/:id", validate(updateUserSchema), controller.update)

export default router