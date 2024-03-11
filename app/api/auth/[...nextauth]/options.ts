import { NextAuthOptions } from "next-auth";
import { connectToDatabase } from "@/lib/mongoose";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/lib/models/user.models";
import bcrypt from "bcrypt";

connectToDatabase();

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

      async profile(profile) {
        let user = await User.findOne({
          email: profile?.email,
        });
        if (!user) {
          user = await User.create({
            email: profile?.email,
            name: profile?.name,
            image: profile?.picture,
          });
        }
        return user;
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, _req) => {
        const user = await User.findOne({
          email: credentials!.email,
        });
        if (!user || !credentials!.password || !user.password) {
          return null;
        }

        const isValidPassword = await bcrypt.compare(
          credentials!.password,
          user.password
        );
        if (!isValidPassword) {
          return null;
        }

        return user;
      },
    }),
  ],

  secret: process.env.NEXT_AUTH_SECRET,

  session: {
    maxAge: 24 * 60 * 60,
  },

  callbacks: {
    async session({ session, user }) {
      return session;
    },
  },
};
