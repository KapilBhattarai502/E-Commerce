import express from 'express'
import connectDB from './Config/connectDB.js';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';
import adminProductRouter from './routes/adminproduct.routes.js'
import cartRouter from './routes/cart.routes.js'
import cartItemRouter from './routes/cartItem.routes.js'
import orderRouter from './routes/order.routes.js'
import reviewRouter from './routes/review.routes.js'
import ratingRouter from './routes/raitng.routes.js'
import adminOrderRouter from './routes/adminOrder.routes.js'



export const app=express()
app.use(express.json());
connectDB();

app.use("/auth",authRouter);
app.use("/api/users",userRouter);
app.use("/api/products",productRouter);
app.use("/api/admin/products",adminProductRouter);
app.use("/api/cart",cartRouter);
app.use("/api/cart_items",cartItemRouter);
app.use("/api/orders",orderRouter);
app.use("/api/reviews",reviewRouter);
app.use("/api/ratings",ratingRouter);
app.use("/api/admin/orders",adminOrderRouter);


















export default app;
