import { Router } from "express"
import { ApplicationController } from "./applications.controller"

const router = Router()
const controller = new ApplicationController

router.post("/", controller.create)
router.get("/", controller.findAll)
router.patch("/:id", controller.update)

export default router