import React from "react";
import Card from "react-bootstrap/Card";
//import { CardGroup } from 'react-bootstrap'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

import CricSubNavBar from "../../Components/Navbar/CricSubNavBar";

function Teams() {
  return (
    <>
      <CricSubNavBar></CricSubNavBar>

      <div className="container mt-2 mb-2">
        <Container fluid className="mt-2">
          <Row>
            <Col md={4}>
              <Card className="mt-2">
                <Card.Body>
                  <Card.Title>hello</Card.Title>
                  <Card.Text>Star Date : 12/02/22</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mt-2">
                <Card.Body>
                  <Card.Title>hello</Card.Title>
                  <Card.Text>Star Date : 12/02/22</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mt-2">
                <Card.Body>
                  <Card.Title>hello</Card.Title>
                  <Card.Text>Star Date : 12/02/22</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mt-2">
                <Card.Body>
                  <Card.Title>hello</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mt-2">
                <Card.Body>
                  <Card.Title>hello</Card.Title>
                  <Card.Text>Star Date : 12/02/22</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Teams;
