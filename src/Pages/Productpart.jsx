import React, { useState } from 'react'
import "../Pages/productpart.css"
import { Button, Col,Row } from 'react-bootstrap'
import Caraousal from '../assets/Caraousal'
import Productdetail from '../assets/Productdetail'
import Form from 'react-bootstrap/Form';
import Norefund from '../assets/Norefund';
import Similer from "../assets/SimilerProduct"




function Productpart() {
 

  return (
    <>
      <Row className='mb-4'> 
     <Col style={{width:"200px",marginLeft:"30px"}}>
     <Caraousal/>
      </Col>
      <Col className='mt-4'>
       <p>JORDAN</p>
       <p className='fw-bolder'>AIR JORDAN 1 RETRO HIGH OG 'BLACK/UNIVERSITY RED-WHITE'</p>
       <p>₹16,995.00</p>
       <p>MRP inclusive of all taxes</p>
       <div>
          <p>Satiny shine and iconic colors—that's a wardrobe-worthy combo. On a classic shoe. And in women's sizing for the first time. Need any more reasons to treat yourself? We didn't think so.</p>
          <ul>
          <li>Textile upper gives you a satiny take on the classic AJ1.</li>
<li>Rubber outsole is durable and gives you traction on a variety of surfaces.</li>
<li>Nike Air technology absorbs impact for cushioning with every step.</li>
<li>Wings logo on collar</li>
<li>Stitched-down Swoosh logo</li>
<li>Nike Air label on tongue </li>
          </ul>
       </div>
       <Productdetail/>
       <br />
       <br />
    
    <div className='d-flex  '>
      <div className='me-4'>
         <Form.Select size="sm" style={{width:"auto"}} className='border-dark'>
  <option className='fw-bolder' value="" selected disabled hidden>Please choose your Size</option>
    <option value="saab">UK 7</option>
    <option value="fiat">UK 8</option>
    <option value="audi">UK 10</option>
        
      </Form.Select>
      </div>
      <div>
          <Norefund/>
      </div>


    

     
    </div> 
    <br />
  
 
      <div className="d-grid gap-1">
      <Button variant="dark" size="sm">
        Buy Now
      </Button>
      
    </div> 
      </Col> 

       
     
     </Row><br />
     <p><span className='fw-bolder'>YOU MAY ALSO LIKE</span>/RECENTLY VIEWED</p>

<Similer/>

 
    </>
  )
}

export default Productpart