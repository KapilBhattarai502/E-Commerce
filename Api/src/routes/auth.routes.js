import express from 'express';
import {register,login}from '../controller/auth.controller.js'
import cors from 'cors'

const router =express.Router();
router.use(cors());



router.post("/signup",register);



router.post("/login",login);

export default router;