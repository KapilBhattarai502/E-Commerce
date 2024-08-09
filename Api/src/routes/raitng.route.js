import express from 'express'
import { authenticate } from '../middleware/authenticate.js';
import { createRating, getAllRatings } from '../controller/Rating.controller.js';

const router=express.Router();

router.post("/create",authenticate,createRating);

router.put("/product/:productId",authenticate,getAllRatings);

export default router;