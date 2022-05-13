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
      <Navbar variant="white" style={{ backgroundColor: "#FFAB00" }}>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: "black" }}>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,duration:2}}>Sports Live</motion.div>
          </Navbar.Brand>
          <Nav className="me-auto mx-auto">
            <span className="cricSubNavBar">
              <Nav.Link
                as={Link}
                style={{ textDecoration: "none", color: "black" }}
                to="/"
              >
                <FaHome/> Home
              </Nav.Link>
            </span>
            <span className="cricSubNavBar">
              <Nav.Link
                as={Link}
                style={{ textDecoration: "none", color: "black" }}
                to="/Cricket"
              >
                <MdSportsCricket />  Cricket
              </Nav.Link>
            </span>
            <span className="cricSubNavBar">
              <Nav.Link
                as={Link}
                style={{ textDecoration: "none", color: "black" }}
                to="/Football"
              >
               <FaBasketballBall /> Football
              </Nav.Link>
            </span>
            {/* <span className="cricSubNavBar">
              <Nav.Link
                as={Link}
                style={{ textDecoration: "none", color: "white" }}
                to="/Football"
              >
                Shop
              </Nav.Link>
            </span>
            <span className="cricSubNavBar">
              <Nav.Link
                as={Link}
                style={{ textDecoration: "none", color: "white" }}
                to="/Football"
              >
                Book
              </Nav.Link>
            </span> */}
          </Nav>
        </Container>
      </Navbar>
      </div>
    </>
  );
}

export default Header;
