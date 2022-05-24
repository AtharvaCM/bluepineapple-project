import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { THEME } from "../../Constants/colors";


function Header() {
  return (
    <>
      <div className="header-class">

        <Nav variant="pills" defaultActiveKey="/" style={{ backgroundColor: THEME.colorPrimary, color: 'white' }} className="justify-content-center" >

          <Nav.Item className="mr-">
            <Nav.Link ><b style={{ color: 'white',alignSelf:"left" }}>SportsLive</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/" as={Link} to='/'><b style={{ color: 'white' }}>Home</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" as={Link} to='/Football'><b style={{ color: 'white' }}>Football</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" as={Link} to='/Cricket'>
              <b style={{ color: 'white' }}>Cricket</b>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}

export default Header;
