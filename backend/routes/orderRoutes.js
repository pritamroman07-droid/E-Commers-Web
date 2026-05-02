import express from 'express';
import { addOrderItems, createPaymentIntent } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.post('/create-payment-intent', protect, createPaymentIntent);

export default router;
