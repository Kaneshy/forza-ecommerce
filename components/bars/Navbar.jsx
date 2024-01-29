'use client'
import SecondNavbar from "@/components/bars/SecondNavbar";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';
import { signIn, signOut, useSession } from "next-auth/react";
import Userbar from "../auth/userbar";
import { useState } from "react";



const Navbar = ({ value }) => {
    const cartItems = useSelector(state => state.cart.items);
    const session = useSession()
    const currectUser = session.data.user
    const [isActive, setisActive] = useState(false)

    return (
        <main >
            <SecondNavbar />
            <div className={`flex w-full flex-col ${value} select-none `}>
                <nav className="flex  items-center relative justify-around w-full py-4  ">
                    <div className="flex gap-2">
                        <IoIosMenu size={24} />
                        <p>Categorias</p>
                    </div>
                    <Link className="text-heading1-bold " href={'/'}>FORZA</Link>
                    <div className="flex gap-x-4">
                        {currectUser ? (
                            <div onClick={(() => setisActive(!isActive))} className='relative flex gap-x-4 items-center'>
                                <img src={currectUser.image || ''} className='bg-gray-800 rounded-full' width={35} height={35} alt="" />
                                {isActive && (
                                    <div className="absolute justify-center text-center flex-col gap-2 bg-neutral-900 text-white  flex min-w-28  -bottom-24 p-2 rounded-xl">
                                        <button onClick={() => signOut()} className="p-1 rounded-xl hover:bg-neutral-800">
                                            Sign Out
                                        </button>
                                        <p className="p-1 rounded-xl hover:bg-neutral-800">Profile</p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button onClick={() => signIn()}>Log In / Sign Up</button>
                        )}
                        <div className="flex gap-x-4">
                            <Link href={'/test'} className=" p-1 relative rounded-full bg-opacity-25">
                                <MdOutlineShoppingCart size={24} />
                                {cartItems.length === 0 ? (
                                    <div></div>
                                ) : (
                                    <div className="absolute text-tiny-medium -top-2 -right-2 bg-red-500 px-1 text-white rounded-full ">{cartItems.length}</div>
                                )}
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className='w-full flex justify-center gap-x-4   p-2'>
                    <Link className="hover:scale-95" href={'/filterby/bygender/female'}>Women</Link>
                    <Link className="hover:scale-95" href={'/filterby/bygender/male'}>Man</Link>
                    <Link className="hover:scale-95" href={'/filterby/bygender/kids'}>Kids</Link>
                    <Link className="hover:scale-95" href={'/filterby/bygender/accessories'}>accessories</Link>
                    <Link className="hover:scale-95" href={'/filterby/bygender/jewelry'}>Jewelry</Link>
                </div>


            </div>
        </main>
    )
}

export default Navbar