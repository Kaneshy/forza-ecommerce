import axios from "axios";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, email, password } = await request.json();

        try {
            const createuser = await axios.post('https://dashboard-a.vercel.app/api/user', {
                email,
                username: name,
                password
            })
            return createuser;
        } catch (err) {
            console.log(err.message, err.status);
        }

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}