import express from 'express'
import connectDB from './Config/connectDB.js';

import authRouters from './routes/auth.route.js';
import userRouters from './routes/user.route.js';


const app=express()
app.use(express.json());
connectDB();

app.use("/auth",authRouters);
app.use("/api/users",userRouters);

app.get("/info",(req,res)=>{
    return res.status(200).send("Hello Guys");
})





export default app;
