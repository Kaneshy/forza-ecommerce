import NextAuth from "next-auth"
import authConfig from "./auth.config"

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    callbacks: {
        async session({token, session}){
            if(token.sub && session.user ) {
                session.user.id = token.sub
                console.log(session)
            }
        },
        async jwt({ token }) {
            console.log({token})
            return token
        }
    },
    ...authConfig
})