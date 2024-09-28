import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/lib/models/UserModel';
import { connectToDatabase } from '@/lib/config/db';

export async function POST(req) {
  const { email, password } = await req.json();
  
  await connectToDatabase();

  const user = await User.findOne({ email });
  
  if (!user) {
    return new Response(JSON.stringify({ error: 'Invalid email or password' }), {
      status: 401,
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return new Response(JSON.stringify({ error: 'Invalid email or password' }), {
      status: 401,
    });
  }

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  // Include token and success message
  return new Response(JSON.stringify({ token, redirect: '/admin/dashboard' }), {
    status: 200,
  });
}
