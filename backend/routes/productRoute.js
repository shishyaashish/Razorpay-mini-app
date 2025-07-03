import express from 'express';
import { getKey, processPayment } from '../controller/productController.js';

const router = express.Router();
router.route("/payment/process").post(processPayment);
router.route("/getkey").get(getKey)
export default router;