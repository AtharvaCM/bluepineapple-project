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
import { THEME } from "../../Constants/colors";

function CricSubNavBar() {
  return (
    <>
      <div>
        <Navbar style={styles.navbar} expand="lg">
          <Container fluid>
            <Navbar.Brand
              href="#"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <Nav.Link
                as={Link}
                to="/Cricket"
                style={{ color: THEME.colorLight, fontWeight: "bold" }}
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
                    style={styles.navLink}
                  >
                    {" "}
                    <RiTeamFill /> Teams
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link as={Link} to="/Cricket/News" style={styles.navLink}>
                    <RiNewspaperFill /> News
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/Ranking/Batting"
                    style={styles.navLink}
                  >
                    <AiFillThunderbolt />
                    Ranking
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/Gallery"
                    style={styles.navLink}
                  >
                    <RiGalleryFill /> Gallery
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/LiveScore"
                    style={styles.navLink}
                  >
                    <RiLiveFill /> Live Scores
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/Series"
                    style={styles.navLink}
                  >
                    <FaHandshake /> Series
                  </Nav.Link>
                </span>
              </Nav>

              {/* <Form className="d-flex">
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
              </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

const styles = {
  navbar: {
    backgroundColor: THEME.colorPrimary,
    color: "white",
  },
  navLink: {
    color: THEME.colorLight,
    fontWeight: "bold",
  },
};

export default CricSubNavBar;
