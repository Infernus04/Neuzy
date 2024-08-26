import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"
const app = express();

app.use(express.json())
// 
app.listen(4000, () => {
    console.log("Server listening on port 3000")
})

app.use(cors())

app.use("/api/user",  )
app.use("/api/auth", authRoutes)