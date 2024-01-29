import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import axios from "axios";
import Google from 'next-auth/providers/google'

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
        async authorize(credentials, req) {
            const response = await axios.post('https://dashboard-a.vercel.app/api/user/login', {
                email: credentials.email,
                password: credentials.password
            })
            if(response.status === 200) {
                const user = await response.data
                return user
            }
            return null
        }
    })
  ],
}