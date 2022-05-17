import { React, useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  Nav,
  Button,
  Form,
  FormControl,
  Container,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Resources/Styles/CricSubNavBar.css";
import PlayerAPI from "../../Api/PlayerAPI";
import {
  RiTeamFill,
  RiNewspaperFill,
  RiGalleryFill,
  RiLiveFill,
} from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { THEME } from "../../Constants/colors";

function CricSubNavBar() {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    PlayerAPI().then((data) => {
      setdata(data.data);
    });
  }, []);

  // let player = data.map((player) => {
  //   return player.name;
  // });


  return (
    <>

      <Nav
        variant="tabs"
        defaultActiveKey="/Cricket"
        style={{ background: "#00796b" }}
        justify
      >
        <Nav.Item>
          <Nav.Link
            href="/Cricket"
            as={Link}
            to="/Cricket"
            style={{ color: "black", fontWeight: "bold" }}
          >
             CricHome
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            as={Link}
            href="/Cricket/Team/Men"
            to="/Cricket/Team/Men"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <RiTeamFill /> Teams
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            as={Link}
            to="/Cricket/News"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <RiNewspaperFill></RiNewspaperFill> News
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-3"
            as={Link}
            to="/Cricket/Ranking/Batting"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <AiFillThunderbolt></AiFillThunderbolt> Rankings
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-4"
            as={Link}
            to="/Cricket/Gallery"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <RiGalleryFill /> Gallery
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-5"
            as={Link}
            to="/Cricket/LiveScore"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <RiLiveFill></RiLiveFill> Live Scores
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-6"
            as={Link}
            to="/Cricket/Series"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <FaHandshake /> Series
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Player Search"
              className="ms-4"
              aria-label="Search"
              onChange={(event) => { setsearch(event.target.value) }}
            />
          </Form>
        </Nav.Item>
      </Nav>




      {/* <div>
        <Navbar style={{backgroundColor:'#00796b'}} expand="lg" varient='pills'>
          <Container fluid>
            <Navbar.Brand style={{ color: "white", fontWeight: "bold" }}>
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





      </div> */}
      <ListGroup>
        {data
          .filter((val) => {
            if (search === "") {
              return "";
            } else if (val.name.includes(search)) {
              return val;
            }
          })
          .map((val, key) => {
            return <ListGroup.Item>{val.name}</ListGroup.Item>;
          })}
      </ListGroup>
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
