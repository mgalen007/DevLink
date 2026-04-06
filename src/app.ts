import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import messagesRouter from "./modules/messages/messages.routes"

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

// Export the instance
export default app

