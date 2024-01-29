import React from 'react'
import { useSession } from 'next-auth/react'
import { signOut, session, signIn, auth } from '@/auth'

const TestPage = async () => {
    const session = await auth()
    console.log('bb', session) 
  return (
    <div>TestPage</div>
  )
}

export default TestPage