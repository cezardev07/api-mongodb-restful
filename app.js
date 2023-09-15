import express from "express"
import cors from "cors"
import "dotenv/config"

const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// connection
import connection from "./database/connection.js"
connection()

//routes
import routes from "./routes/router.js"
app.use("/api", routes)

//port
const PORT = process.env.PORT || 3333

//serve
app.listen(PORT, () => {
    console.log(`serve is running!\n http://localhost:${PORT}/api/<routes>`)
})