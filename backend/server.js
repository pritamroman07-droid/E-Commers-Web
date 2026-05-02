import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

// Load our environment variables (PORT, MONGO_URI, etc.)
dotenv.config();

// Connect to the database
connectDB();

// Initialize the express application
const app = express();

// Middleware to allow our frontend to talk to our backend
app.use(cors());

// Middleware to allow our server to understand JSON data in the request body
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// A simple home route just to check if the server is running
app.get('/', (req, res) => {
  res.send('API is running smoothly...');
});

// Error handling middleware for 404 (Not Found)
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// General error handling middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

// Define the port our server will listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
