import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Button, Form, FormControl, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";


function FootballSubNavBar() {
  return (
    <>
      <Navbar bg="success" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: "black", fontWeight: "bold" }}>
            Football
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
              as={Link}
              to={"/Football/Teams"}
               
                style={{ color: "black", fontWeight: "bold" }}
              >
                Teams
              </Nav.Link>
              <Nav.Link
                href="#action2"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Schedule
              </Nav.Link>
              <Nav.Link
                href="#action2"
                style={{ color: "black", fontWeight: "bold" }}
              >
                News
              </Nav.Link>
              <Nav.Link href="#" style={{ color: "black", fontWeight: "bold" }}>
                Ranking
              </Nav.Link>
              <Nav.Link href="#" style={{ color: "black", fontWeight: "bold" }}>
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to={"/footbll/Scores"} style={{ color: "black", fontWeight: "bold" }}>
                Live Scores
              </Nav.Link>
              <Nav.Link href="#" style={{ color: "black", fontWeight: "bold" }}>
                Series
              </Nav.Link>
              <Nav.Link href="#" style={{ color: "black", fontWeight: "bold" }}>
                Stats
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button
                variant="outline-success"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  borderColor: "black",
                }}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default FootballSubNavBar;
