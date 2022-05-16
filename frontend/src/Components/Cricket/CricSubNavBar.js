import { React, useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Button, Form, FormControl, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Resources/Styles/CricSubNavBar.css";
import PlayerApi from '../../Api/PlayerApi'
import {
  RiTeamFill,
  RiNewspaperFill,
  RiGalleryFill,
  RiLiveFill,
} from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";


function CricSubNavBar() {
  const [data, setdata] = useState([])
  const [search, setsearch] = useState("");


  useEffect(() => {
    PlayerApi().then((data) => {
      setdata(data.data);

    })
  }, [])

  let player = data.map((player) => {
    return player.name;
  })

  //setsearch(player

  //console.log('searchdata:', data);
  //console.log('playerList', search)
  return (
    <>
      <div>
        <Navbar
          style={{ background: 'rgb(238,174,202)', background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(53,198,194,0.9808298319327731) 100%)', color: "white" }}
          expand="lg"
        >
          <Container fluid>
            <Navbar.Brand
              style={{ color: "white", fontWeight: "bold" }}
            >
              <Nav.Link
                as={Link}
                to="/Cricket"
                style={{ color: "black", fontWeight: "bold" }}
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
                    to="/Cricket/LiveScore"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    <RiLiveFill /> Live Scores
                  </Nav.Link>
                </span>
                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/Team/Men"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    {" "}
                    <RiTeamFill /> Teams
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/News"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    <RiNewspaperFill /> News
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/Ranking/Batting"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    <AiFillThunderbolt />
                    Ranking
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/Gallery"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    <RiGalleryFill /> Gallery
                  </Nav.Link>
                </span>

                <span className="cricSubNavBar">
                  <Nav.Link
                    as={Link}
                    to="/Cricket/Series"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    <FaHandshake /> Series
                  </Nav.Link>
                </span>
              </Nav>

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Player Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(event) => { setsearch(event.target.value) }}
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
      <ListGroup>
        {
          data.filter((val) => {
            if (search === "") {
              return ''
            }
            else if (val.name.includes(search)) {
              return val
            }
          }).map((val, key) => {
            return (

              <ListGroup.Item>{val.name}</ListGroup.Item>

            )
          })
        }
      </ListGroup>
    </>
  );
}
export default CricSubNavBar;
