import githubAuth from "next-auth/providers/github";
import googleAuth from "next-auth/providers/google";
import NextAuth, { getServerSession } from "next-auth";


export const authOptions = {
  providers: [
    githubAuth({
      clientId: process.env.GITUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    googleAuth({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
