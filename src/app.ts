import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import messagesRouter from "./modules/messages/messages.routes"
import usersRouter from "./modules/users/users.routes"
import projectsRouter from "./modules/projects/projects.routes"
import applicationsRouter from "./modules/applications/applications.routes"
import authRouter from "./modules/auth/auth.routes"

// Express instance
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())

// Health-check endpoint
app.get("/health-check", (_req, res) => {
    res.status(200).json({
        status: "OK",
        name: "DevLink API"
    })
})

// Mount routers
app.use("/api/messages", messagesRouter)
app.use("/api/users", usersRouter)
app.use("/api/projects", projectsRouter)
app.use("/api/applications", applicationsRouter)
app.use("/api/auth", authRouter)

// Export the instance
export default app

