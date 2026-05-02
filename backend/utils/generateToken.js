import jwt from 'jsonwebtoken';

// This function creates a token that we send to the user after they log in
const generateToken = (id) => {
  // We sign the token with the user's ID and our secret key
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // The token will expire in 30 days
  });
};

export default generateToken;
