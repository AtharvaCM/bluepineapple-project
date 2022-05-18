import {React,useState} from "react";
import { Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link,withRouter} from "react-router-dom";
import { RiLiveFill, RiNewspaperFill } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";

const activeTab = (history,path) =>{
  
  if(history.location.pathname === path)
  {
    //console.log('history.location.pathname',history.location.pathname,'path:',path);
    return {backgroundColor:'white',color:'black'};
  }
};

function FootballSubNavBar({history}) {

  return (
    <>
      <Nav
      style={{backgroundColor:'#00796B'}} justify>

        <Nav.Item>
          <Nav.Link as={Link} to="/football" style={activeTab(history,"/Football")}>
             <b style={{color:'black'}}><RiLiveFill></RiLiveFill>Live Scores</b>    
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            as={Link}
            to="/Football/LeagueList"
            style={activeTab(history,"/Football/LeagueList")}
            
          >
            <b style={{color:'black'}}>Leagues</b>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            as={Link}
            to="/football/News"
            style={activeTab(history,"/football/News")}
            
          >
            <b style={{color:'black'}}><RiNewspaperFill></RiNewspaperFill> News</b>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-3"
            as={Link}
            to="/football/Ranking"
            style={activeTab(history,"/football/Ranking")}
            
          >
            <b style={{color:'black'}}><AiFillThunderbolt></AiFillThunderbolt> Rankings</b>
          </Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link
            eventKey="link-4"
            as={Link}
            to="/football/Gallery"
            style={activeTab(history,"/football/Gallery")}
            
            
          >
            <b style={{color:'black'}}><AiFillThunderbolt></AiFillThunderbolt> Gallery</b>
          </Nav.Link>
        </Nav.Item>

        
      </Nav>
    </>
  );
}

export default FootballSubNavBar;
