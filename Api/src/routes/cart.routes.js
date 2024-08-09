import express from 'express';
import { authenticate } from '../middleware/authenticate.js';
import { addItemToCart, findUserCart } from '../controller/cart.controller.js';

const router=express.Router();


router.get("/",authenticate,findUserCart);

router.put("/add",authenticate,addItemToCart);