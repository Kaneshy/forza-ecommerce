import Link from 'next/link'
import React from 'react'

const Card = ({value}) => {
  return (
    <Link 
    href={`/byid/${value._id}`}
    className='flex flex-col'>
        <section>
            <img src={value.imgUrl} alt="" />
        </section>
        <section className='flex flex-col gap-y-2 p-2'>
            <h1 className='t text-body-bold'>{value.title}</h1>
            <p>${value.price}</p>
        </section>
    </Link>
  )
}

export default Card