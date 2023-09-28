import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/session";

const handler = NextAuth(authOptions);

//allow us to use GET and POST method
export { handler as GET, handler as POST };
