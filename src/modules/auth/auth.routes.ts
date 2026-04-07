import { Router } from "express"
import { AuthController } from "./auth.controller"

const router = Router()
const controller = new AuthController

router.post("/login", controller.login)
router.post("/register", controller.register)

export default router