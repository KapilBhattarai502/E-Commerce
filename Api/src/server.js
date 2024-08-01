import express from 'express'
import 'dotenv/config'
import { connectDB } from './Config/connectDB.js';

const app=express();

app.use(express.json());
connectDB();


app.listen((req,res)=>{
    console.log(`App is listening to port ${process.env.PORT}`)
})