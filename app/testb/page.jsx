'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const TestPage =  () => {
  const session = useSession()
    console.log('dsssssss', session)
  return (
    <section className='flex gap-x-4 items-center'>

      {/* <div className='bg-gray-800 rounded-full'>
        <img width={70} height={70} src={session.user.image} alt="" />
      </div>
      <p className='t text-body-semibold'>{session.user.name}</p> */}
    </section>
  )
}

export default TestPage