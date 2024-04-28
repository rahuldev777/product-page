import React from 'react'
import '../assets/product.css'
import Button from 'react-bootstrap/Button';
import Amazon from "../images/pngegg.png";
import flipkart from "../images/flipkart.png"
import Jordan from "../images/nike-jordan.png"
import Content from './Content';
import { Link } from 'react-router-dom';

function Product() {
  return (
    <>
    <div className='main container ' id='main' style={{marginTop:"100px"}}>
        <div className='left-part' style={{top:"300px;"}}>
            <h1>YOUR FEET DESERVE THE BEST</h1>
           <Content/>

         <div className='main-buttons'>
  <Button variant="danger" className='fw-bolder me-2'>Shop Now</Button>{' '}
     <Link to="/product"><Button variant="dark" className='fw-bolder'>View Details</Button>{' '}</Link> 

         </div>
          <div className='main-links mt-2'>
            <a href="http://"><img src="https://i.pinimg.com/736x/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.jpg" height={"60px"} alt="" /></a>
            <a href="http://"><img src={Amazon} height={"50px"} alt="" /></a>
        </div>
        </div>

        <div className='right-part'>

            <img src={Jordan} className='shoe-img' height={"350px"} alt="" srcset="" />
      

        </div>
       

    </div>
    </>
  )
}

export default Product