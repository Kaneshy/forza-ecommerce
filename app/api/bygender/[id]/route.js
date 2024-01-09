import axios from "axios";
import { NextResponse } from "next/server";


export async function GET(req, {params}) {

    try {
        const data = await axios.get(`https://dashboard-a.vercel.app/api/product/bygener/${params.id}`)
        return NextResponse.json(data.data)
    } catch (error) {
        return NextResponse.json('error api/product', error.message, error.status)
    }
}