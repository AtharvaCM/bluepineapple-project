import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <>

      <Navbar style={{backgroundColor: 'rgb(255, 145, 38)'}} variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/' style={{color:'black'}}>Sports Live</Navbar.Brand>
          <Nav className="me-auto mx-auto">
            <Nav.Link as={Link} style={{ textDecoration: "none", color: "black" }} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} style={{ textDecoration: "none", color: "black" }} to='/Cricket'>Cricket</Nav.Link>
            <Nav.Link as={Link} style={{ textDecoration: "none", color: "black" }} to='/Football'>Football</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header