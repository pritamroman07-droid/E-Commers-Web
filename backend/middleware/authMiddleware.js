import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// This middleware checks if the user is logged in by verifying the JWT token
const protect = async (req, res, next) => {
  let token;

  // Check if token exists in the "Authorization" header and starts with "Bearer"
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get the token from the header (Bearer <token>)
      token = req.headers.authorization.split(' ')[1];

      // Decode the token to get the user ID
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch the user from the database and attach it to the request object (req.user)
      // We exclude the password field for security
      req.user = await User.findById(decoded.id).select('-password');

      next(); // Move to the next middleware or controller
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// This middleware checks if the user is an admin
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized as an admin' });
  }
};

export { protect, admin };
