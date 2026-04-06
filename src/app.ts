import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

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

// Export the instance
export default app

