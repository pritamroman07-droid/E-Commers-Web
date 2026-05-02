import express from 'express';
import { authUser, registerUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Define our routes and link them to the controller functions
router.post('/', registerUser); // POST /api/users
router.post('/login', authUser); // POST /api/users/login
router.get('/profile', protect, getUserProfile); // GET /api/users/profile (protected)

export default router;
