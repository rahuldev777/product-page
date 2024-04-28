import React from 'react'
import '../assets/header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
              <Navbar  data-bs-theme="light">
        <Container >
          <a href="http://"><img src="https://logowik.com/content/uploads/images/697_nike.jpg" alt="" height={"80px"} width={"130px"} srcset="" /></a>
          <Nav className="mx-auto">
          <Link to="/"  style={{textDecoration:"none"}} >
          <Nav className='mt-2 ' style={{color:"#6e6d6d"}}>Home</Nav>
          </Link>  
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            <div className="dropdown">
  <Nav.Link className="dropbtn">Dropdown</Nav.Link>
  <div class="dropdown-content">
    <a href="#" className='text-center fw-light' >Nike</a>
    <a href="#" className='text-center fw-light'>New Balance </a>
    <a href="#" className='text-center fw-light'>ADDIDAS</a>
  </div>
  </div>
          </Nav>

          <Button variant="danger">Sign In</Button>{' '}
          
        </Container >
      </Navbar>
    </div>
  )
}

export default Header