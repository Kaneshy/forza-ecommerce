'use client'
import Card from '@/components/Card'
import axios from 'axios'
import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';
import MainNoti from '@/components/notifications/MainNoti';

const ByidPage = ({ params }) => {

    const [product, setproduct] = useState({})
    const [maylike, setmaylike] = useState([])
    const dispatch = useDispatch();
    const [nofi, setnofi] = useState(false)

    useEffect(() => {
        const getproduct = async () => {
            const data = await axios.get(`/api/byid/${params.id}`)
            setproduct(data.data)
            const mayalsolike = await axios.get(`/api/bygender/${data.data.sex}`)
            setmaylike(mayalsolike.data)
        }
        getproduct()
    }, [])

    const handleAddToCart = () => {
        setnofi(true)
        dispatch(addToCart(product));
      };


    return (
        <main className=' '>
            {nofi && (
                <MainNoti value={'iteam added to the Cart'} />
            )}
            <section className='w-full flex max-sm:flex-col mb-10 max-w-header'>
                <div className='w-full '>
                    <img src={product.imgUrl} alt="" />
                </div>
                <div className='p-6 flex flex-col gap-y-4 justify-cente w-full'>
                    <div className='flex flex-col gap-y-1'>
                        <span className='text-small-regular'>385 purchased in the last 7 days</span>
                        <h1 className='text-heading2-bold'>{product.title}</h1>
                        <p className='t text-heading3-bold'>${product.price}</p>
                    </div>
                    <div className='flex flex-col gap-y-2 mb-4'>
                        <span className='f text-body-semibold'>Select Size</span>
                        <div className='flex gap-2'>
                            <p className='p-2 bg-neutral-400 text-white'>XS</p>
                            <p className='p-2 bg-neutral-400 text-white'>S</p>
                            <p className='p-2 bg-neutral-400 text-white'>M</p>
                            <p className='p-2 bg-neutral-400 text-white'>L</p>
                            <p className='p-2 bg-neutral-400 text-white'>XL</p>
                        </div>
                    </div>
                    <p className='text-small-regular '>4 interest-free payments of $37.50 with klama</p>
                    <button  onClick={handleAddToCart} className='w-full rounded-xl p-2 text-white bg-black'>Add to bag</button>
                    <button className='w-full rounded-xl p-2 border border-black'>Add to Wishlist</button>
                    <div className='mt-6 flex flex-col gap-y-4'>
                        <span>Faster Shipping options may be available</span>
                        <h1>More About the Product:</h1>
                        <p>{product.desc}</p>
                    </div>
                </div>
            </section>
            <section >
                <div className='flex flex-col'>
                    <div className='p-10 w-full'>
                        <h1 className='px-4 text-heading2-semibold'>You May Also Like</h1>
                        <div className='grid-a '>
                            {maylike.slice(0, 10).map((x, i) => {
                                return (
                                    <Card key={i} value={x} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ByidPage