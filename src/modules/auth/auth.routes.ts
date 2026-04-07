import { Router } from "express"
import { AuthController } from "./auth.controller"
import { loginSchema, registerSchema } from "./auth.dto"
import validate from "../../middleware/validator.middleware"

const router = Router()
const controller = new AuthController

router.post("/login", validate(loginSchema), controller.login)
router.post("/register", validate(registerSchema), controller.register)

export default router