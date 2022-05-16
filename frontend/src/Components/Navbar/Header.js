import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBasketballBall,FaHome} from "react-icons/fa";
import {MdSportsCricket} from 'react-icons/md'
import {motion} from 'framer-motion'


function Header() {
  return (
    <>
    <div>
      <Navbar variant="dark" style={{ backgroundColor:'#A5DFD2' }}>{/*"#3f4156"*/}
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: "white",fontWeight:'bold'}}>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,duration:2}} style={{color:'black'}}>Sports Live</motion.div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto mx-auto">
            <span className="cricSubNavBar">
              <Nav.Link
                as={Link}
                style={{ color: "black"}}
                to="/"
              >
                <FaHome/> Home |
              </Nav.Link>
            </span>
            <span className="cricSubNavBar">
              <Nav.Link
                as={Link}
                style={{  color: "black" }}
                to="/Football"
              >
               <FaBasketballBall /> Football |
              </Nav.Link>
            </span>
            <span className="cricSubNavBar">
              <Nav.Link
                as={Link}
                style={{ color: "black"}}
                to="/Cricket"
              >
                <MdSportsCricket />  Cricket
              </Nav.Link>
            </span>    
          </Nav>
        </Container>
      </Navbar>
      </div>
    </>
  );
}

export default Header;
