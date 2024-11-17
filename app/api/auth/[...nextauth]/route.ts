import User from "@/app/models/user";
import { connectDB } from "@/utils";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }

        }),
        
    ],
    callbacks: {
        async signIn({ user, account, profile, credentials }) {

            await connectDB();

            try {

                const isUser = await User.findOne({ email: profile?.email });
                console.log('Profile',profile)
                if (!isUser) {
                    await User.create({
                        email: profile?.email,
                        username: profile?.name?.replace(" ", "").toLowerCase(),
                        image: profile?.picture || "", // Optionally store the picture
                    });
                }
                return true;

            } catch (error) {
                console.log(error);
                return false
            }
        },
        async session({ session, token, user }) {
            console.log("Session:", session); // Session object sent to the client
            console.log("Token:", token); // Token generated for the session
            console.log("User:", user); // User object
            return session;
        },
    }

})

export { handler as GET, handler as POST };

