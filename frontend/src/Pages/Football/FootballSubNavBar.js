import React from "react";
import { Nav,Form,FormControl,Button} from "react-bootstrap";
import { Link } from 'react-router-dom'
import {RiLiveFill,RiNewspaperFill} from 'react-icons/ri'
import { AiFillThunderbolt } from "react-icons/ai";


function FootballSubNavBar() {
  return (
    <>

      <Nav variant="tabs" defaultActiveKey="/football/Scores" style={{ background: '#00796b'}} justify>
        <Nav.Item>
          <Nav.Link href="/football/Scores" as={Link} to='/football/Scores' style={{color:'black',fontWeight:'bold'}}><RiLiveFill></RiLiveFill> Live Scores</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" as={Link} to='/Football/LeagueList' style={{color:'black',fontWeight:'bold'}}>Leagues</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" as={Link} to='#' style={{color:'black',fontWeight:'bold'}}><RiNewspaperFill></RiNewspaperFill> News</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" as={Link} to='#' style={{color:'black',fontWeight:'bold'}}><AiFillThunderbolt></AiFillThunderbolt> Rankings</Nav.Link>
        </Nav.Item>

        <Nav.Item>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Player Search"
            className="ms-4"
            aria-label="Search"
          />
        </Form>
        </Nav.Item>
      </Nav>





      {/* <Navbar style={{ background: 'rgb(238,174,202)',color: "white" }} expand="lg">
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
              <Nav.Link as={Link} to={"/football/Scores"} style={{ color: "black", fontWeight: "bold" }}>
                Live Scores
              </Nav.Link>
              
              <Nav.Link
              as={Link}
              to={"/Football/LeagueList"}
               
                style={{ color: "black", fontWeight: "bold" }}
              >
                Leagues
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
      </Navbar> */}
    </>
  );
}

export default FootballSubNavBar;
