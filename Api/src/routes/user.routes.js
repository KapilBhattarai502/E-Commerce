import express from 'express';
import {getUserProfile,getAllUsers} from '../controller/user.controller.js'
const router =express.Router();

router.get('/profile',getUserProfile);

router.get('/',getAllUsers);

export default router;