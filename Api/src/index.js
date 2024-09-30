import express from "express";
import connectDB from "./Config/connectDB.js";
import cors from 'cors';
import crypto from 'crypto'

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import adminProductRouter from "./routes/adminproduct.routes.js";
import cartRouter from "./routes/cart.routes.js";
import cartItemRouter from "./routes/cartItem.routes.js";
import orderRouter from "./routes/order.routes.js";
import reviewRouter from "./routes/review.routes.js";
import ratingRouter from "./routes/raitng.routes.js";
import adminOrderRouter from "./routes/adminOrder.routes.js";

export const app = express();
app.use(express.json());
app.use(cors())
connectDB();

app.use("/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/admin/products", adminProductRouter);
app.use("/api/cart", cartRouter);
app.use("/api/cart_items", cartItemRouter);
app.use("/api/orders", orderRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/ratings", ratingRouter);
app.use("/api/admin/orders", adminOrderRouter);

const secret_key = "8gBm/:&EnhH.1/q";

app.post('/generate-signature', (req, res) => {

  const { total_amount, transaction_uuid, product_code} = req.body;

  // Log incoming data for debugging
  console.log('Received data:', { total_amount, transaction_uuid, product_code, secret_key });

  // Check if all required fields are present
  if (!total_amount || !transaction_uuid || !product_code || !secret_key) {
      return res.status(400).json({ error: 'All fields (total_amount, transaction_uuid, product_code, secretKey) are required.' });
  }

  // Ensure the data format for signing is consistent with the API requirements
  const dataToSign = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
  console.log('Data to sign:', dataToSign); // Log the data to sign

  // Create HMAC SHA256
  const hmac = crypto.createHmac('sha256', secret_key);

  // Update the HMAC with the data
  hmac.update(dataToSign);

  // Generate the signature and convert it to Base64
  const signature = hmac.digest('base64');

  console.log('Signature is:', signature); // Log the generated signature

  // Return the signature in JSON format
  return res.json(signature);
});

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Hello from the backend" });
});

export default app;
