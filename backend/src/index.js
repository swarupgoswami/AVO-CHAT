import express from "express";
import dotenv from"dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import messageRoutes from "./routes/message.route.js";


dotenv.config();
const app=express();
const port=process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth',authRoutes);
app.use('/api/message',messageRoutes);


app.listen(port,()=>
{console.log("server is reunning on the port");
connectDB();
});