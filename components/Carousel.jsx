'use client'
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';



const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    const [products, setproducts] = useState([])
    const [filterH, setfilterH] = useState(false)
    
    
    
    useEffect(() => {
      const dataproducts = async () => {
        const res = await axios.get(`/api/bygender/jewelry`)
        setproducts(res.data)
      }
      dataproducts()
    }, [])

    return (
        <Slider {...settings} >

            {products && products.map((x, index) => {
                return (
                    <div key={index} className='border-2 h-96 flex object-cover' >
                        <img className='flex w-full object-cover'  src={x.imgUrl} alt="" />
                    </div>
                )
            })}

        </Slider>
    );
};

export default Carousel;