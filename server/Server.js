import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express();

app.use(express.json())

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.log(err)
})


app.listen(4000, () => {
    console.log("Server listening on port 3000")
})

app.use(cors())

app.use("/api/user",  )
app.use("/api/auth", authRoutes)