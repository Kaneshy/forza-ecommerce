'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IoIosMenu } from "react-icons/io";
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';

const SecondNavbar = () => {

    const [scrollB, setscrollB] = useState(0)
    const cartItems = useSelector(state => state.cart.items);

    const scrollA = () => {
        window.onscroll = function () {
            const currentScrollPos = window.scrollY;
            setscrollB(currentScrollPos)
        }
    }
    useEffect(() => {
        scrollA()
    }, [scrollB])

    // nt-bold py-2 px-4 rounded transition-transform transform hover:scale-125 duration-2000">

    return (
        <>
            <motion.div
                className={`${scrollB > 50 ? 'fixed' : 'hidden'} select-none w-full z-20`}
            >
                <div className='flex w-full flex-col'>
                    <nav className="flex items-center  relative justify-around w-full py-4 text-black bg-white ">
                        <div className="flex gap-2 ">
                            <IoIosMenu size={24} />
                            <p>Categorias</p>
                        </div>
                        <Link className='text-heading1-bold' href={'/'}>FORZA</Link>
                        <Link href={'/test'} className=" p-1 relative rounded-full bg-opacity-25">
                            <MdOutlineShoppingCart size={24} />
                            {cartItems.length === 0 ? (
                                <div></div>
                            ) : (
                                <div className="absolute text-tiny-medium -top-2 -right-2 bg-red-500 px-1 text-white rounded-full ">{cartItems.length}</div>
                            )}
                        </Link>
                    </nav>
                    <div className='w-full flex justify-center gap-x-4 bg-white p-2'>
                        <Link href={'/filterby/bygender/female'}>Women</Link>
                        <Link href={'/filterby/bygender/male'}>Man</Link>
                        <Link href={'/filterby/bygender/kids'}>Kids</Link>
                        <Link href={'/filterby/bygender/accessories'}>accessories</Link>
                        <Link href={'/filterby/bygender/jewelry'}>Jewelry</Link>
                    </div>
                </div>
            </motion.div>


        </>
    )
}

export default SecondNavbar