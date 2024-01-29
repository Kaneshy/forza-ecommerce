import NextAuth from "next-auth"
import authConfig from "./auth.config"
import axios from "axios"

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    session:{strategy: "jwt"},
    pages: {
        signIn: "/auth/login",
        error: "/auth/error"
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === "google") {
              try {
                const { name, email, image,  } = user;
      
                const dataBackend = await axios.post('https://dashboard-a.vercel.app/api/user/providers', {
                  email,
                  name,
                  image
                });

                return dataBackend.data;
              } catch (err) {
                console.log(err);
              }
            }
            return user;
          },



        async session({token, session}){
            if(token.sub && session.user ) {
                session.user.id = token.sub
            }
            return session
        },
        async jwt({ token }) {
            return token
        }
    },
    ...authConfig
})