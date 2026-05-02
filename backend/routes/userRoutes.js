import express from 'express';
import { authUser, registerUser, getUserProfile, getUsers } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Define our routes and link them to the controller functions
router.route('/').post(registerUser).get(protect, admin, getUsers); // POST /api/users, GET /api/users (admin only)
router.post('/login', authUser); // POST /api/users/login
router.get('/profile', protect, getUserProfile); // GET /api/users/profile (protected)

export default router;
