import React from "react";
import { Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link,withRouter} from "react-router-dom";
import { RiLiveFill, RiNewspaperFill } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";

const activeTab = (history,path) =>{
  if(history.location.pathname === path)
  {
    return {backgroundColor:'white'};
  }
};

function FootballSubNavBar({history}) {
  return (
    <>
      <Nav
      style={{backgroundColor:'#00796B'}}
      justify
      >
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/football/Scores"
            style={activeTab(history,"/football/Scores")}
          >
            <RiLiveFill></RiLiveFill> Live Scores
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            as={Link}
            to="/Football/LeagueList"
            style={activeTab(history,"/Football/LeagueList")}
          >
            Leagues
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            as={Link}
            to="/football/News"
            style={activeTab(history,"/football/News")}
          >
            <RiNewspaperFill></RiNewspaperFill> News
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-3"
            as={Link}
            to="/football/Ranking"
            style={activeTab(history,"/football/Ranking")}
          >
            <AiFillThunderbolt></AiFillThunderbolt> Rankings
          </Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link
            eventKey="link-4"
            as={Link}
            to="/football/Gallery"
            style={activeTab(history,"/football/Gallery")}
          >
            <AiFillThunderbolt></AiFillThunderbolt> Gallery
          </Nav.Link>
        </Nav.Item>

        
      </Nav>
    </>
  );
}

export default withRouter(FootballSubNavBar);
