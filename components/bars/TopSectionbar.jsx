'use client'
import React, { useEffect, useState } from 'react'
import { categoriesC } from '@/constants/prendas'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { usePathname} from 'next/navigation'



const TopSectionbar = () => {

    const params = useParams()
    const [sex, setsex] = useState('')

    useEffect(() => {
        const nuevaCadena = params.id.split('%26')[0];
        setsex(nuevaCadena)
    }, [params])

    const pathname = usePathname()


    return (
        <>
            <div className="mb-4 p-6 w-full flex ">
                <div className='w-96 p-4 max-lg:hidden'>
                    FORZA
                </div>
                <div className=" p-2 w-full">
                    <div>
                        {categoriesC.map((clothing, index) => {

                            const isActive = (pathname.includes(clothing) &&clothing.length > 1)

                            return(
                            <button
                                key={`prendas${index * 8}`}
                                style={{ margin: '5px' }}
                            >
                                <Link href={`/filterby/bytag/${sex}&&${clothing}`}>
                                    <p className={`py-1 px-2 rounded-xl text-neutral-700 bg-slate-200 ${isActive && 'bg-slate-400 text-white'}`}>{clothing}</p>
                                </Link>
                            </button>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopSectionbar