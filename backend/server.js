import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

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

// A simple home route just to check if the server is running
app.get('/', (req, res) => {
  res.send('API is running smoothly...');
});

// Define the port our server will listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
