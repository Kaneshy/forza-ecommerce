// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(req) {
//   const path = req.nextUrl.pathname;
//   const token = await getToken({
//     req: req,
//     secret: process.env.NEXTAUTH_SECRET,
//   });

//   const publicPaths = path === "/login" || path === "/signup";

//   if (publicPaths && token) {
//     return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
//   }
//   if (!publicPaths && !token) {
//     return NextResponse.redirect(new URL("/", req.nextUrl));
//   }
// }

// export const config = {
//   matcher: ["/", "/signup", "/dashboard"],
// };