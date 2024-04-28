import React, { useState } from 'react'
import Slider from "react-slick"


function SimilerProduct() {

    const[image,setimage]=useState({
        img1:"https://images.vegnonveg.com/resized/700X573/10999/air-jordan-1-retro-high-og-whiteteam-red-white-662a3d3d79261.jpg",
        text1:"",
        img2:'https://images.vegnonveg.com/resized/700X573/10936/air-jordan-3-retro-whitecosmic-clay-sail-cement-grey-white-661e0b1a4e7cc.jpg',
        text2:"",
        img3:"https://images.vegnonveg.com/resized/700X573/10934/air-jordan-4-retro-whitecoconut-milk-vivid-sulfur-white-66167eb42b031.jpg",
        text3:"",
        img4:"https://images.vegnonveg.com/resized/700X573/10919/air-jordan-1-retro-high-og-whiteblack-green-glow-multicolor-661e0b851eee6.jpg",
        text4:"",
        img5:"https://images.vegnonveg.com/resized/700X573/10938/blazer-low-77-vintage-photo-bluesail-gum-medium-brown-black-blue-66167b1920373.jpg",
        text5:"",
        img6:"https://images.vegnonveg.com/resized/700X573/10920/nike-air-max-1-platinum-tintdark-obsidian-wolf-grey-grey-660ff5b168c35.jpg",
        text6:""
    
    
    })


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    
        <div className="slider-container">
      <Slider {...settings}>
        <div>
         <img src={image.img1} height={"300px"} alt="" srcset=""
         
         onMouseOver={()=>setimage({...image,img1:"https://images.vegnonveg.com/resized/700X573/11000/air-jordan-1-retro-high-og-gs-whiteteam-red-white-662a3deb76b54.jpg",text1:"AIR JORDAN 1 RETRO HIGH OG 'WHITE/TEAM RED₹10,295.00"})}
         onMouseOut={()=>setimage({...image,img1:"https://images.vegnonveg.com/resized/700X573/10999/air-jordan-1-retro-high-og-whiteteam-red-white-662a3d3d79261.jpg",text1:""})}
         />
         <p className='text-center fw-bolder'>{image.text1}</p>
        </div>
        <div>
          <img src={image.img2} height={"300px"} alt=""
          
          onMouseOver={()=>setimage({...image,img2:"https://images.vegnonveg.com/resized/700X573/10936/air-jordan-3-retro-whitecosmic-clay-sail-cement-grey-white-661e0b1a7b2ab.jpg",text2:"AIR JORDAN 3 RETRO 'WHITE/COSMIC CLAY-SAIL-CEMENT GREY'₹16,595.00"})}
          onMouseOut={()=>setimage({...image,img2:"https://images.vegnonveg.com/resized/700X573/10936/air-jordan-3-retro-whitecosmic-clay-sail-cement-grey-white-661e0b1a4e7cc.jpg",text2:""})}
          />

          <p className='text-center fw-bolder'>{image.text2}</p>
        </div>
        <div>
         <img src={image.img3} height={"300px"} alt="" srcset=""
         
         onMouseOver={()=>setimage({...image,img3:"https://images.vegnonveg.com/resized/700X573/10934/air-jordan-4-retro-whitecoconut-milk-vivid-sulfur-white-66167eb46e44b.jpg",text3:"AIR JORDAN 4 RETRO 'WHITE/COCONUT MILK-VIVID SULFUR'₹19,295.00"})}
         onMouseOut={()=>setimage({...image,img3:"https://images.vegnonveg.com/resized/700X573/10934/air-jordan-4-retro-whitecoconut-milk-vivid-sulfur-white-66167eb42b031.jpg",text3:""})}
         />
         <p className='fw-bolder text-center'>{image.text3}</p>
        </div>
        <div>
          <img src={image.img4} alt="" srcset="" height={"300px"}

          onMouseOver={()=>setimage({...image,img4:"https://images.vegnonveg.com/resized/700X573/10919/air-jordan-1-retro-high-og-whiteblack-green-glow-multicolor-661e0b856a763.jpg",text4:"AIR JORDAN 1 RETRO HIGH OG 'WHITE/BLACK-GREEN GLOW'₹16,995.00"})}
          onMouseOut={()=>setimage({...image,img4:"https://images.vegnonveg.com/resized/700X573/10919/air-jordan-1-retro-high-og-whiteblack-green-glow-multicolor-661e0b851eee6.jpg",text4:""})}
          />
          <p className='text-center fw-bolder'>{image.text4}</p>
        </div>
        <div>
         <img src={image.img5}  alt="" srcset="" height={"300px"} 
         onMouseOver={()=>setimage({...image,img5:"https://images.vegnonveg.com/resized/700X573/10938/blazer-low-77-vintage-photo-bluesail-gum-medium-brown-black-blue-66167b1957cd7.jpg",text5:"BLAZER LOW '77 VINTAGE 'PHOTO BLUE/SAIL-GUM MEDIUM BROWN-BLACK'₹8,695.00"})}
         onMouseOut={()=>setimage({...image,img5:"https://images.vegnonveg.com/resized/700X573/10938/blazer-low-77-vintage-photo-bluesail-gum-medium-brown-black-blue-66167b1920373.jpg",text5:""})} />
         <p className='fw-bolder text-center'>{image.text5}</p>
        </div>
        <div>
         <img src={image.img6} alt="" srcset="" height={"300px"} 
         
        onMouseOver={()=>setimage({...image,img6:"https://images.vegnonveg.com/resized/700X573/10920/nike-air-max-1-platinum-tintdark-obsidian-wolf-grey-grey-660ff5b1b21b7.jpg",text6:"AIR MAX 1 'PLATINUM TINT/DARK OBSIDIAN-WOLF GREY ₹12,795.00"})}
        onMouseOut={()=>setimage({...image,img6:"https://images.vegnonveg.com/resized/700X573/10920/nike-air-max-1-platinum-tintdark-obsidian-wolf-grey-grey-660ff5b168c35.jpg",text6:""})}
         />
         <p className='fw-bolder text-center'>{image.text6}</p>
        </div>
       
      </Slider>
    </div>
  )
}

export default SimilerProduct