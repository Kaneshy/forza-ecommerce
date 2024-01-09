'use client'
import Card from '@/components/Card'
import LeftSidebar from '@/components/bars/LeftSidebar';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HiAdjustments } from "react-icons/hi";


const ProductPage = ({params}) => {

    const [products, setproducts] = useState([])
    const [filterH, setfilterH] = useState(false)
    const [shortByoption, setshortByoption] = useState('')

    useEffect(() => {
        console.log('sho', shortByoption)
      const dataproducts = async () => {
        const res = await axios.get(`/api/bytag/${params.id}`)
        setproducts(res.data)
      }
      dataproducts()
    }, [])
    
    return (
        <main className='flex flex-col'>
            <section className='p-10 w-full'>
                <section className='w-full p-4 flex justify-between lg:hidden'>
                    <button
                        onClick={() => setfilterH(!filterH)}
                        className='bg-neutral-800 text-white p-2 flex justify-center items-center gap-x-2'>
                        FILTRAR <HiAdjustments size={20} />
                    </button>
                    {filterH && (
                        <div className='top-0 left-0 h-screen fixed bg-white z-50'>
                            <button 
                            onClick={()=>setfilterH(!filterH)}
                            className='absolute top-2 right-2 p-1 text-body-bold'>X</button>
                            <LeftSidebar value={false}/>
                        </div>
                    )}
                    <select className='bg-neutral-800 text-white p-2 flex justify-center items-center gap-x-2'
                            value={shortByoption} onChange={(e) => setshortByoption(e.target.value)}
                    >
                        <option value="">SHORT BY </option>
                        <option value="newest">Featured</option>
                        <option value="newest">Newest </option>
                        <option value="lto">Price Low To High </option>
                        <option value="gtl">Price High To Low </option>
                        <option value="gtl">Top Rated </option>
                    </select>
                </section>
                <section className='grid-a '>
                    {products.map((x, i) => {
                        return (
                            <Card key={i} value={x} />
                        )
                    })}
                </section>
            </section>

        </main>
    )
}

export default ProductPage