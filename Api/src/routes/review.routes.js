import express from 'express'
import { authenticate } from '../middleware/authenticate.js';
import { createReview, getAllReview } from '../controller/review.controller.js';

const router=express.Router();

router.post("/create",authenticate,createReview)

router.get("/product/:productId",authenticate,getAllReview);

export default router;