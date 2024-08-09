import express from 'express'
import { authenticate } from '../middleware/authenticate.js';
import { findProductById, getAllProducts } from '../controller/product.controller.js';

const router=express.Router();


router.get("/",getAllProducts);

router.get("/id/:id",authenticate,findProductById);

export default router;