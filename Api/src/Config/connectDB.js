import mongoose from 'mongoose'
import 'dotenv/config'

export const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://kapilbhattarai502:dob205807@cluster0.ssdqlio.mongodb.net/E-commerce?retryWrites=true&w=majority&appName=Cluster0');
        console.log("DB connected successfully!!!");
    } catch (error) {
        console.log("Connection Failed");
        
    }
    
}