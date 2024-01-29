import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import axios from "axios";

export default {
  providers: [
    CredentialsProvider({
        async authorize(credentials, req) {
            console.log('crede', credentials)
            const response = await axios.post('http://localhost:3001/api/user/login', {
                email: credentials.email,
                password: credentials.password
            })
            console.log('ere', response.status)
            if(response.status === 200) {
                const user = await response.data
                console.log('ere', user)
                return user
            }


            // const validatedFields = LoginSchema.safeParse(credentials)

            // if(validatedFields.success) {
            //     const { email, password } = validatedFields.data

            //     const user = await getUserByEmail(email)
            //     if(!user || !user.password) return null

            //     const passwordsMarch = await bcrypt.compare(
            //         password,
            //         user.password
            //     )

            //     if(passwordsMarch ) return user
            // }

            return null
        }
    })
  ],
}