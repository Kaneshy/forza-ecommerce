'use client'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const LeftSidebar = ({value}) => {

    const [sortby, setsortby] = useState(false)
    const [price, setprice] = useState(false)

    return (
        <main className={`flex flex-col p-4 w-80 gap-y-8 ${value ? 'max-lg:hidden' : ''}`}>
            <h2 className='p-2 text-small-regular text-neutral-600'>212 ITEMS</h2>
            <section className='border-b-2'>
                <button
                    onClick={() => setsortby(!sortby)}
                    className='p-2 text-small-regular gap-y-4 w-full  flex justify-between'>
                    Sort By
                    {sortby ? (
                        <IoIosArrowUp size={20} />
                    ) : (
                        <IoIosArrowDown size={20} />
                    )}
                </button>
                {
                    sortby && (
                        <div className='flex flex-col gap-y-2'>
                            <div className='text-neutral-600 py-1 px-2 text-small-regular flex gap-x-2'>
                                <input type="radio" name="Featured" id="a" />
                                <label htmlFor="a">Featured</label>
                            </div>
                            <div className='text-neutral-600 py-1 px-2 text-small-regular flex gap-x-2'>
                                <input type="radio" name="Featured" id="b" />
                                <label htmlFor="b">Newest</label>
                            </div>
                            <div className='text-neutral-600 py-1 px-2 text-small-regular flex gap-x-2'>
                                <input type="radio" name="Featured" id="c" />
                                <label htmlFor="c">Price Low To High</label>
                            </div>
                            <div className='text-neutral-600 py-1 px-2 text-small-regular flex gap-x-2'>
                                <input type="radio" name="Featured" id="d" />
                                <label htmlFor="d">Price High To Low</label>
                            </div>
                            <div className='text-neutral-600 py-1 px-2 text-small-regular flex gap-x-2'>
                                <input type="radio" name="Featured" id="e" />
                                <label htmlFor="e">Top Rated</label>
                            </div>
                        </div>
                    )
                }

            </section>
            <section className='border-b-2'>
                <button
                    onClick={() => setprice(!price)}
                    className='p-2 text-small-regular gap-y-4 w-full  flex justify-between'>
                    Price
                    {price ? (
                        <IoIosArrowUp size={20} />
                    ) : (
                        <IoIosArrowDown size={20} />
                    )}
                </button>
                {
                    price && (
                        <div className='flex flex-col gap-y-2'>
                            <div className='text-neutral-600 py-1 px-2 text-small-regular flex gap-x-2'>
                                <input type="checkbox" name="Featured" id="a" />
                                <label htmlFor="a">$25 - $50</label>
                            </div>
                            <div className='text-neutral-600 py-1 px-2 text-small-regular flex gap-x-2'>
                                <input type="checkbox" name="Featured" id="b" />
                                <label htmlFor="b">$50 - $100</label>
                            </div>
                            <div className='text-neutral-600 py-1 px-2 text-small-regular flex gap-x-2'>
                                <input type="checkbox" name="Featured" id="c" />
                                <label htmlFor="c">$100 - $150</label>
                            </div>
                            <div className='text-neutral-600 py-1 px-2 text-small-regular flex gap-x-2'>
                                <input type="checkbox" name="Featured" id="d" />
                                <label htmlFor="d">$150 - $300</label>
                            </div>
                        </div>
                    )
                }

            </section>
        </main>
    )
}

export default LeftSidebar