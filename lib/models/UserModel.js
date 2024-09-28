import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }, // Default role is user
  image: { type: String }, // Ensure image field exists
  name: { type: String }, // Ensure name field exists
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);