import React from 'react'
import { help, company, social } from '@/constants/Footer'
import Link from 'next/link'

const Footer = () => {
    return (
        <main className='mt-54 bg-black text-white pb-20'>
            <section className='flex p-8 gap-x-6  max-sm:flex-col'>
                <div className='flex  w-1/2 max-sm:w-full justify-center '>
                    <div >
                        <h1 className='text-neutral-500'>MAY WE GELP YOU?</h1>
                        <div className='p-4 flex justify-between flex-col gap-4'>
                            {help.map((x, i) => {
                                return (
                                    <Link key={i} href={x.route}>
                                        {x.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <h1 className='text-neutral-500'>THE COMPANY</h1>
                        <div className='p-4 flex justify-between flex-col gap-4'>
                            {company.map((x, i) => {
                                return (
                                    <Link key={i} href={x.route}>
                                        {x.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className='flex w-1/2 max-sm:w-full bg-blue-288'>
                    <form className='w-full'>
                        <h1>CONTACT US</h1>

                        <div className="mb-4 border-gray-500 border   p-2 w-full">
                            <label htmlFor="price" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Price (required): </label>
                            <input type="number" id="price" name='price' className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                        </div>

                        <div className="mb-4 border-gray-500 border   p-2 w-full">
                            <label htmlFor="color" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Color (required): </label>
                            <input type="text" id="color" name='color' className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                        </div>

                    </form>
                </div>

            </section>
            <section className='p-4 flex justify-around  max-sm:flex-col gap-8'>
                {social.map((x, i) => {
                    return (
                        <a key={i} href={x.route} target='_blank' className='flex justify-center items-center gap-4' >
                            {x.iconR} {x.title}
                        </a>
                    )
                })}
            </section>
        </main>
    )
}

export default Footer