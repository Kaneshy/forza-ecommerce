import axios from "axios";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, email, password } = await request.json();
        console.log('ansdf', name, email, password)

        try {
            // const user = await axios.post('http://localhost:3000/api/user/login', {
            //     email,
            //     name,
            //     password
            // })
            // console.log(user)

            // if (user) {
            //     return user;
            // }

            const createuser = await axios.post('https://dashboard-a.vercel.app/api/user', {
                email,
                username: name,
                password
            })
            
            console.log('ddd', createuser.status, createuser.statusText)
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