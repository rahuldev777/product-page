import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../assets/productdetail.css"
import { Link } from 'react-router-dom';
import { MdOutlineNotInterested } from "react-icons/md";

function Norefund() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Link onClick={handleShow} style={{textDecoration:"none",color:"black",fontWeight:"bolder",border:"1px solid black",padding:"4px"}} className='rounded'>No Refund <MdOutlineNotInterested /></Link> 
      <Modal  className='Modal'
      show={show} 
      onHide={handleClose} 
      animation={false}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
            
             <Modal.Title style={{marginLeft:"150px"}}>Policy</Modal.Title>   
            
        </Modal.Header>
        <Modal.Body> No Returns,Exchanges and cancellations are not allowed on the below category of products.</Modal.Body>
        <Modal.Body> <ol><li>Shoe Care</li> 
<li>Face masks, socks and inner wear (For hygiene reasons).</li>
<li>Magazine</li>
<li>Limited Quantity Products such as Jordans, Yeezy's, Nike Dunks and collabs Markdown Products</li>
          </ol></Modal.Body>
        <Modal.Body>If you have any questions or concerns with regard to sizing, materials or colors of a specific product on our site, please e-mail us on hello@vegnonveg.com before committing to your purchase. All accepted returns will receive store credit. Refunds are ONLY processed based on fulfilment errors, such as incorrectly shipped,damaged or missing items. P.S inacse of of a fullfilment error's please inform us within 24-48 hours of delivery Feel free to contact us with any questions.</Modal.Body>
      </Modal>
    </>
  )
}

export default Norefund