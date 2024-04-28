import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Caraousal() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <>
    <div className="slider-container mt-4 ">

    <Slider {...settings}>
    <div>
     <img src="https://images.vegnonveg.com/resized/700X573/10048/air-jordan-1-retro-hi-og-blackuniversity-red-white-6528f5a337cc7.jpg" className='rounded' alt="" srcset="" />
      </div>
      <div>
        <img src="https://images.vegnonveg.com/resized/700X573/10048/air-jordan-1-retro-hi-og-blackuniversity-red-white-6528f5a3abeb5.jpg" className='rounded' alt="" srcset="" />
      </div>
      <div>
        <img src="https://images.vegnonveg.com/resized/700X573/10048/air-jordan-1-retro-hi-og-blackuniversity-red-white-6528f5a377aa8.jpg" className='rounded' alt="" srcset="" />
      </div>
      <div>
        <img src="https://images.vegnonveg.com/resized/700X573/10048/air-jordan-1-retro-hi-og-blackuniversity-red-white-6528f5a35bab7.jpg" className='rounded' alt="" srcset="" />
      </div>
      <div>
        <img src="https://images.vegnonveg.com/resized/700X573/10048/air-jordan-1-retro-hi-og-blackuniversity-red-white-6528f5a3e4b63.jpg" className='rounded' alt="" srcset="" />
      </div>
      <div> 
        <img src="https://images.vegnonveg.com/resized/700X573/10048/air-jordan-1-retro-hi-og-blackuniversity-red-white-6528f5a464a27.jpg" className='rounded' alt="" srcset="" />
      </div>
    </Slider>
      </div>
    </>
  )
}

export default Caraousal