import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '@/lib/config/db';
import { User } from '@/lib/models/UserModel';

// Define authOptions for clarity and reusability
export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log('Missing credentials');
          return null;
        }

        await connectToDatabase();
        const user = await User.findOne({ email: credentials.email });
        console.log('User from top:', user);
        if (!user) {
          console.log('User not found');
          return null;
        }


        


        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordCorrect) {
          console.log('Invalid password');
          return null;
        }

        return {
          id: user._id,
          email: user.email,
          name: user.name || 'Anonymous',
          image: user.image || null,
          role: user.role,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.name = token.name;
        session.user.image = token.picture;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

// Use authOptions in the NextAuth handler
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
