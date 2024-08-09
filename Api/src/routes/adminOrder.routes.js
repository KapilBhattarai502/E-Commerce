import express from 'express'
import { authenticate } from '../middleware/authenticate.js';
import { cancelledOrderss, confirmedOrderss, deleteOrderss, deliverOrderss, getAllOrderss, shipOrderss } from '../controller/adminOrder.controller.js';

const router=express.Router();

router.get("/",authenticate,getAllOrderss);

router.put("/:orderId/confirmed",authenticate,confirmedOrderss);
router.put("/:orderId/ship",authenticate,shipOrderss);
router.put("/:orderId/deliver ",authenticate,deliverOrderss);
router.put("/:orderId/cancel",authenticate,cancelledOrderss);
router.put("/:orderId/delete",authenticate,deleteOrderss);

 export default router;