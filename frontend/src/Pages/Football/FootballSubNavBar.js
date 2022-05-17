import React from "react";
import { Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiLiveFill, RiNewspaperFill } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";

function FootballSubNavBar() {
  return (
    <>
      <Nav
        variant="tabs"
        defaultActiveKey="/football/Scores"
        style={{ background: "#00796b" }}
        justify
      >
        <Nav.Item>
          <Nav.Link
            href="/football/Scores"
            as={Link}
            to="/football/Scores"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <RiLiveFill></RiLiveFill> Live Scores
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            as={Link}
            to="/Football/LeagueList"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Leagues
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            as={Link}
            to="/football/News"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <RiNewspaperFill></RiNewspaperFill> News
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-3"
            as={Link}
            to="football/Ranking"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <AiFillThunderbolt></AiFillThunderbolt> Rankings
          </Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link
            eventKey="link-4"
            as={Link}
            to="Football/Gallery"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <AiFillThunderbolt></AiFillThunderbolt> Gallery
          </Nav.Link>
        </Nav.Item>

        
      </Nav>
    </>
  );
}

export default FootballSubNavBar;
