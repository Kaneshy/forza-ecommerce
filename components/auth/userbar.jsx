import React from 'react'
import { useSession } from 'next-auth/react'
import { signOut, session, signIn, auth } from '@/auth'

const Userbar = async () => {
    const session = await auth()
    console.log('dsssssss', session)
    return (
        <section className='flex gap-x-4 items-center'>
            <img src={session.user.image || ''} className='bg-gray-800 rounded-full' width={35} height={35} alt="" />
        </section>
    )
}

export default Userbar