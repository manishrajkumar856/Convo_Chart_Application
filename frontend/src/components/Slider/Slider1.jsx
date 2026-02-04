import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const Slider1 = ({children}) => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };




  return (

    <div className='relative   z-10 w-full bg-white px-10 py-8 rounded-2xl'>
        <Slider {...settings}>
            {children}
        </Slider>
    </div>
  )
}

export default Slider1