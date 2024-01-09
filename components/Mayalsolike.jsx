'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const getServerSideProps = (async ({value}) => {
    // Fetch data from external API
    const b = value
    console.log('s', value)
    // Pass data to the page via props
    return { props: { b } }
  }) 

const Mayalsolike = ({b}) => {

    // const [maylike, setmaylike] = useState([])

    useEffect(() => {
        console.log('dfd', b)
    //     getServerSideProps()
    //     const getproduct = async () => {
    //         const mayalsolike = await axios.get(`/api/bygender/${value.sex}`)
    //         setmaylike(mayalsolike.data)
    //     }
    //     getproduct()
    }, [])


    return (
        <section >
            {/* <div className='flex flex-col'>
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
            </div> */}
        </section>
    )
}

export default Mayalsolike

