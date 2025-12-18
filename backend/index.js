import express from "express"
import dotenv from "dotenv"
import {connectDB} from "./db/connectDB.js"
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config({ path: "./backend/.env" });


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());//allows us to parse incoming request:req.body
app.use(cookieParser());//allows us to parse incoming cookies
app.use(cors({origin: "http://localhost:5173", credentials: true}));//allows us to make requests from frontend to backend
app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    connectDB();
    console.log("Server is running on port:", PORT)
})
//cKOrVQvDrz8CJ13Z


