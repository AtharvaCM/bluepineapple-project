import React from "react";
//import Navbar from "react-bootstrap/Navbar";
import { Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { THEME } from "../../Constants/colors";

function Header() {
  return (
    <>
      <div>

        <Nav variant="pills" defaultActiveKey="/" style={{ backgroundColor: THEME.colorPrimary,color:'white' }} className="justify-content-center" >
          <Nav.Item>
            <Nav.Link href="/" as={Link} to='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" as={Link} to='/Football'>Football</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" as={Link} to='/Cricket'>
              Cricket
            </Nav.Link>
          </Nav.Item>
        </Nav>



        {/* <Navbar variant="dark" style={{ backgroundColor: THEME.colorPrimary }}>
          
          <Container>
            <Navbar.Brand
              as={Link}
              to="/"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 2 }}
                style={{ color: THEME.colorLight }}
              >
                Sports Live
              </motion.div>
            </Navbar.Brand>
            <Nav className="me-auto mx-auto">
              <span className="cricSubNavBar">
                <Nav.Link
                  as={Link}
                  style={{
                    textDecoration: "none",
                    color: THEME.colorLight,
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                  to="/"
                >
                  <FaHome /> Home
                </Nav.Link>
              </span>
              <span className="cricSubNavBar">
                <Nav.Link
                  as={Link}
                  style={{
                    textDecoration: "none",
                    color: THEME.colorLight,
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                  to="/Cricket"
                >
                  <MdSportsCricket /> Cricket
                </Nav.Link>
              </span>
              <span className="cricSubNavBar">
                <Nav.Link
                  as={Link}
                  style={{
                    textDecoration: "none",
                    color: THEME.colorLight,
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                  to="/Football"
                >
                  <FaBasketballBall /> Football
                </Nav.Link>
              </span>
            </Nav>
          </Container>
        </Navbar> */}
      </div>
    </>
  );
}

export default Header;
