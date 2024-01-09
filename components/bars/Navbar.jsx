'use client'
import SecondNavbar from "@/components/bars/SecondNavbar";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';



const Navbar = ({value}) => {
    const cartItems = useSelector(state => state.cart.items);

    console.log('va', value)
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
                    <Link href={'/test'} className=" p-1 relative rounded-full bg-opacity-25">
                        <MdOutlineShoppingCart  size={24} />
                        {cartItems.length === 0 ? (
                            <div></div>
                        ) : (
                            <div className="absolute text-tiny-medium -top-2 -right-2 bg-red-500 px-1 text-white rounded-full ">{cartItems.length}</div>
                        )}
                    </Link>
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