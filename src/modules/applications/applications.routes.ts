import { Router } from "express"
import { ApplicationController } from "./applications.controller"
import { createAppSchema, updateAppSchema } from "./applications.dto"
import validate from "../../middleware/validator.middleware"

const router = Router()
const controller = new ApplicationController

router.post("/", validate(createAppSchema), controller.create)
router.get("/", controller.findAll)
router.patch("/:id", validate(updateAppSchema), controller.update)

export default router