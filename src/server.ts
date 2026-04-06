import app from "./app"
import mongoose from "mongoose"
import dotenv from "dotenv"

// Load environment variables
dotenv.config()
const dbUri = process.env.MONGODB_URI
const PORT = process.env.PORT

async function bootstrap() {
    await mongoose.connect(dbUri!)
    console.log("DB connected!")
    app.listen(
        PORT ?? 3000,
        () => console.log(`DevLink API running at http://localhost:${PORT}`)
    )
}

try {
    bootstrap()
} catch(err) {
    console.log(`FATAL ERROR: ${err}`)
}