import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// This is the blueprint for our User data
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true, // No two users can have the same email
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false, // By default, users are not admins
  },
}, {
  timestamps: true, // This automatically adds 'createdAt' and 'updatedAt' fields
});

// This is a "pre-save" middleware. It runs before the user is saved to the database.
// We use it to hash the password so it's not stored in plain text.
userSchema.pre('save', async function (next) {
  // If the password hasn't been changed, we just move on
  if (!this.isModified('password')) {
    next();
  }

  // Generate a salt and hash the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// This is a custom method we add to our User model to compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
