import express from 'express';
import { getProducts, getProductById, createProduct, getRecommendedProducts } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route for getting all products
router.route('/')
  .get(getProducts)
  .post(protect, admin, createProduct); // Only admins can create products

// Route for AI recommendations
router.route('/:id/recommendations').get(getRecommendedProducts);

// Route for getting a single product by ID
router.route('/:id').get(getProductById);

export default router;
