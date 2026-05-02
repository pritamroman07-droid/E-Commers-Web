import mongoose from 'mongoose';

// This function will help us connect to our MongoDB database
const connectDB = async () => {
  try {
    // We use mongoose to connect using the URI we stored in our .env file
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    // If successful, we'll see this message in the console
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If there's an error, we'll log it and stop the server
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;
