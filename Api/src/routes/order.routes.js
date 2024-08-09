import express from 'express'
import { createOrder, findOrderById, orderHistory } from '../controller/order.controller.js'
import { authenticate } from '../middleware/authenticate.js';

const router=express.Router()

router.post("/",authenticate,createOrder);

router.get("/user",authenticate,orderHistory);

router.get("/:id",authenticate,findOrderById);

export default router;