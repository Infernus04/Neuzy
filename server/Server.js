import express from "express"
import cors from "cors"
const app = express();

app.use(express.json())

app.listen(4000, () => {
    console.log("Server listening on port 3000")
})

app.use(cors())