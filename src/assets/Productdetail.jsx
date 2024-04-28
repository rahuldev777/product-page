import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../assets/productdetail.css"
import { Link } from 'react-router-dom';


function Productdetail() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <> 
      <Link onClick={handleShow} style={{textDecoration:"none",color:"black",fontWeight:"bolder"}}>Product details <i className="arrow right"></i></Link> 
      <Modal  className='Modal'
      show={show} 
      onHide={handleClose} 
      animation={false}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
            
             <Modal.Title style={{marginLeft:"150px"}}>Product details</Modal.Title>   
            
        </Modal.Header>
        <Modal.Body> <span className='fw-bolder'>Manufacturer :</span>Nike</Modal.Body>
        <Modal.Body> <span className='fw-bolder'>Country of Origin :</span>China</Modal.Body>
        <Modal.Body> <span className='fw-bolder'>Imported By :</span>Nike India Private Limited</Modal.Body>
        <Modal.Body> <span className='fw-bolder'>Address :</span> Ground & 1st Floor, Olympia building,No.66/1 ,Bagmane Tech park, CV Raman nagar, Bangalore</Modal.Body>
        <Modal.Body> <span className='fw-bolder'>Product Dimensions :</span>  <span style={{paddingLeft:"200px"}}><br />Length: 36.00 cm <br />
Width
:25.00 cm
<br />
Height
: 14.00 cm</span> </Modal.Body>
<Modal.Body><span className='fw-bolder'>Item Weight:</span>1.10 kg</Modal.Body>
<Modal.Body><span className='fw-bolder'>Generic Name</span>:Shoes</Modal.Body>
<Modal.Body><span className='fw-bolder'>Unit of Measurement:</span>1 Pair</Modal.Body>
<Modal.Body><span className='fw-bolder'>Marketed By :</span>HSS Apparel Pvt Ltd</Modal.Body>

        
      </Modal>
    </>
  )
}

export default Productdetail