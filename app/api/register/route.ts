import User from "@/app/models/user";
import { connectDB } from "@/utils";
import bcrypt from 'bcryptjs';

export const POST = async (request: Request) => {

    try {

        console.log("Reached Server")
        connectDB();

        const { username, email, password } = await request.json()

        const isUser = await User.findOne({ email })

        if (isUser) {
            return new Response(JSON.stringify({ error: 'email already used' }), {
                status: 400,
                headers: { "content-type": "application/json" }
            });
        }

        const hashedPass = await bcrypt.hash(password, 11);

        const newUser = new User({
            username,
            email,
            password: hashedPass
        })

        await newUser.save()

        return new Response(JSON.stringify({ message: 'User created successfully' }), {
            status: 201,
            headers: { "content-type": "application/json" }
        })


    } catch (error: any) {
        console.error("Error during user registration:", error);

        // Handle errors gracefully
        return new Response(
            JSON.stringify({ error: "An error occurred during registration" }),
            {
                status: 500,
                headers: { "content-type": "application/json" },
            }
        );
    }
}