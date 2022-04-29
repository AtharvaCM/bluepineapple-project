import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Button, Form, FormControl, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function cricSubNavBar() {
    return (
        <>
            <Navbar  style={{backgroundColor: '#505050', color: "white"}} expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" style={{color:'white',fontWeight:'bold'}} >Cricket</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/Cricket/Teams' style={{color:'white',fontWeight:'bold'}}>Teams</Nav.Link>
                            <Nav.Link href="#action2" style={{color:'white',fontWeight:'bold'}}>Schedule</Nav.Link>
                            <Nav.Link href="#action2" style={{color:'white',fontWeight:'bold'}}>News</Nav.Link>
                            <Nav.Link href="#" style={{color:'white',fontWeight:'bold'}}>Ranking</Nav.Link>
                            <Nav.Link href="#" style={{color:'white',fontWeight:'bold'}}>Gallery</Nav.Link>
                            <Nav.Link href="#" style={{color:'white',fontWeight:'bold'}}>Live Scores</Nav.Link>
                            <Nav.Link href="#" style={{color:'white',fontWeight:'bold'}}>Quiz</Nav.Link>
                            <Nav.Link href="#" style={{color:'white',fontWeight:'bold'}}>About</Nav.Link>
                            <Nav.Link href="#" style={{color:'white',fontWeight:'bold'}}>Series</Nav.Link>
                            <Nav.Link href="#" style={{color:'white',fontWeight:'bold'}}>Videos</Nav.Link>
                            <Nav.Link href="#" style={{color:'white',fontWeight:'bold'}}>Stats</Nav.Link>
                            <Nav.Link href="#" style={{color:'white',fontWeight:'bold'}}>Contact Us</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-primary" style={{color:'white',fontWeight:'bold',borderColor:'white'}}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default cricSubNavBar