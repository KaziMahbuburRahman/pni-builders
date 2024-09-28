import bcrypt from 'bcryptjs';
import {User} from '@/lib/models/UserModel';
import { connectToDatabase } from '@/lib/config/db';

export async function POST(req) {
  try {
    const { email, password, role } = await req.json();

    await connectToDatabase();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
      role,
    });
    console.log("newUser",newUser);
    await newUser.save();

    return new Response(JSON.stringify({ message: 'User registered successfully' }), {
      status: 201,
    });
  } catch (error) {
    console.error('Error in registration:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
