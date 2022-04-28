import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Sports Live</Navbar.Brand>
          <Nav className="me-auto mx-auto">
            <Nav.Link as={Link} style={{ textDecoration: "none", color: "white" }} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} style={{ textDecoration: "none", color: "white" }} to='/Cricket'>Cricket</Nav.Link>
            <Nav.Link as={Link} style={{ textDecoration: "none", color: "white" }} to='/Football'>Football</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header