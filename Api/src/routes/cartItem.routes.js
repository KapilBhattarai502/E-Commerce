
import express from 'express'
import { authenticate } from '../middleware/authenticate.js';
import { removeCartItem, updateCartItem } from '../controller/cartItem.controller.js';

const router=express.Router();

router.put("/:id",authenticate,updateCartItem);

router.delete("/:id",authenticate,removeCartItem);