

import express from 'express'
import { authenticate } from '../middleware/authenticate.js';
import { createMultipleProduct, createProduct, deleteProduct, updateProduct } from '../controller/product.controller.js';

const router=express.Router();

router.post("/",authenticate,createProduct);

router.post("/create",authenticate,createMultipleProduct);

router.delete("/:id",authenticate,deleteProduct);

router.put("/:id",authenticate,updateProduct);

export default router;