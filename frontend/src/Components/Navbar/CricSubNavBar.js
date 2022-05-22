import { React, useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  Nav,
  Button,
  Form,
  FormControl,
  Container,
  ListGroup,
  Image
} from "react-bootstrap";
import { Link,withRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Resources/Styles/CricSubNavBar.css";
import { useHistory } from "react-router-dom";
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


const activeTab = (history,path) =>{
  
  if(history.location.pathname === path)
  {
    return {backgroundColor:'white',color:'black'};
  }
};







function CricSubNavBar({history}) {

  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    PlayerAPI().then((data) => {
      setdata(data.data);
    });
  }, []);

  
const routeChange =(e)=>{
  console.log('cricketNavBar',e);
  
  history.push({
    pathname: "/Cricket/players/Playernfo",
    state: {e},
  });
  console.log('History:',history);

}

  return (
    <>
    <Nav
      style={{backgroundColor:'#00796B'}} justify>

        <Nav.Item>
          <Nav.Link as={Link} to="/Cricket" style={activeTab(history,"/Cricket")}>
             <b style={{color:'black'}}>Cricket</b>    
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            as={Link}
            to="/Cricket/Team/Men"
            style={activeTab(history,"/Cricket/Team/Men")}  
          >
            <b style={{color:'black'}}><RiTeamFill />Teams</b>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            as={Link}
            to="/Cricket/News"
            style={activeTab(history,"/Cricket/News")}           
          >
            <b style={{color:'black'}}><RiNewspaperFill></RiNewspaperFill> News</b>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-3"
            as={Link}
            to="/Cricket/Ranking/Batting"
            style={activeTab(history,"/Cricket/Ranking/Batting")}  
          >
            <b style={{color:'black'}}><AiFillThunderbolt></AiFillThunderbolt> Rankings</b>
          </Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link
            eventKey="link-4"
            as={Link}
            to="/Cricket/LiveScore"
            style={activeTab(history,"/Cricket/LiveScore")}  
          >
            <b style={{color:'black'}}><RiLiveFill></RiLiveFill>LiveScores</b>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-4"
            as={Link}
            to="/Cricket/Series"
            style={activeTab(history,"/Cricket/Series")}  
          >
            <b style={{color:'black'}}><FaHandshake></FaHandshake>Series</b>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-5"
            as={Link}
            to="/Cricket/Gallery"
            style={activeTab(history,"/Cricket/Gallery")}  
          >
            <b style={{color:'black'}}><FaHandshake></FaHandshake>Gallery</b>
          </Nav.Link>
        </Nav.Item>


        <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Player Search"
                  className="me-2 ms-4"
                  aria-label="Search"
                  style={{backgroundColor:'#F2F2F2'}}
                  onChange={(event) => { setsearch(event.target.value) }}
                />
                
              </Form> 
      </Nav>


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
            return( <ListGroup.Item onClick={()=>routeChange(val)} action varient='success'>
              <Image src={val.img_src} style={{width:'50px'}}></Image>
              <b className="ms-1"><plaintext style={{display:'inline'}}>{val.name}({val.team})</plaintext></b>
              <br />
              
              </ListGroup.Item>);
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

export default withRouter(CricSubNavBar)
