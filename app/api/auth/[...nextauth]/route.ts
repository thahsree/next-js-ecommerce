import User from "@/app/models/user";
import { connectDB } from "@/utils";
import bcrypt from 'bcryptjs';
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credential: any) {
                await connectDB();
                const user = await User.findOne({
                    email: credential?.email,
                }).select("+password");

                
                if (!user) throw new Error("Wrong Email");

                
                if(user.password === undefined || ""){
                    throw new Error("This email used for different login method")
                }
                const passwordMatch = await bcrypt.compare(
                    credential.password,
                    user.password
                );

                if (!passwordMatch) throw new Error("Wrong Password");
                console.log(user, "USER")
                return user;
            },
        }),
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
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user, account, profile, credentials }) {

            console.log('SIGNIN TRIGGERED>>>>>>>>')

            await connectDB();

            try {

                const isUser = await User.findOne({ email: user?.email });

                console.log('Profile', profile)

                if (!isUser) {
                    const dbUser = await User.create({
                        email: profile?.email,
                        username: profile?.name?.replace(" ", "").toLowerCase(),
                        image: profile?.picture || "", // Optionally store the picture
                    });

                    user._id = dbUser._id.toString()
                } else {
                    user._id = isUser._id.toString()
                }

                return true;

            } catch (error) {
                console.log(error);
                return false
            }
        },
        async jwt({ token, user }: any) {

            console.log(token, "JWT TOKEN")
            console.log(user, "JWT USER")

            if (user) {
                console.log(user._id?.toString(), 'user_ID')
                token._id = user._id,
                token.email = user.email,
                token.name = user.name || user.username
            }


            return token
        },
        async session({ session, token, user }) {

            session.user = {
                ...session.user,
                id: token._id as string
            }
            console.log("Session:", session); // Session object sent to the client
            console.log("Token:", token); // Token generated for the session

            return session;
        },
    }

})

export { handler as GET, handler as POST };

