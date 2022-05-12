import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Button, Form, FormControl, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Resources/Styles/CricSubNavBar.css";
import {
  RiTeamFill,
  RiNewspaperFill,
  RiGalleryFill,
  RiLiveFill,
} from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
// import { ImStatsDots } from "react-icons/im";
import { AiFillThunderbolt } from "react-icons/ai";
//import {motion} from 'framer-motion'

function cricSubNavBar() {
  return (
    <>
      <div>
        <Navbar
          style={{ backgroundColor: "#51546e", color: "white" }}
          expand="lg"
        >
          <Container fluid>
            <Navbar.Brand
              href="#"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <Nav.Link
                as={Link}
                to="/Cricket"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Cricket
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" style={{ padding: "0px" }}>
              <Nav
                className="me-auto my-2 my-lg-0 mt-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/Team/Men"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    {" "}
                    <RiTeamFill /> Teams
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/News"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    <RiNewspaperFill /> News
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/Ranking/Batting"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    <AiFillThunderbolt />
                    Ranking
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/Gallery"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    <RiGalleryFill /> Gallery
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/LiveScore"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    <RiLiveFill /> Live Scores
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/Series"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    <FaHandshake /> Series
                  </Nav.Link>
                </span>

                {/* <span className='cricSubNavBar'>
                                    <Nav.Link href="#" style={{ color: 'white', fontWeight: 'bold' }}><ImStatsDots/> Stats</Nav.Link>
                                </span> */}
              </Nav>

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "#71C6DD",
                  }}
                >
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default cricSubNavBar;
