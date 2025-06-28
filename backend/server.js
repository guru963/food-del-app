import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodrouter from "./routes/foodroute.js"

import path from "path";
import { fileURLToPath } from "url";

// These two lines are needed when using ES modules (import/export)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




//app config
const app=express()
const port=4000
// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//middleware
app.use(express.json())
app.use(cors())


//DB connection
connectDB();

//api endpoints
app.use("/api/food",foodrouter)
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://gururaman2006:wkLNsRO5jR8wIoHY@cluster0.7c1vhfx.mongodb.net/?
//mongodb://localhost:27017