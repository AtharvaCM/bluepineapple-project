import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <>
      <Navbar variant="dark" style={{ backgroundColor: "#3f4156" }}>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
            Sports Live
          </Navbar.Brand>
          <Nav className="me-auto mx-auto">
            <span className="cricSubNavBar">
              <Nav.Link
                as={Link}
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                Home
              </Nav.Link>
            </span>
            <span className="cricSubNavBar">
              <Nav.Link
                as={Link}
                style={{ textDecoration: "none", color: "white" }}
                to="/Cricket"
              >
                Cricket
              </Nav.Link>
            </span>
            <span className="cricSubNavBar">
              <Nav.Link
                as={Link}
                style={{ textDecoration: "none", color: "white" }}
                to="/Football"
              >
                Football
              </Nav.Link>
            </span>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
