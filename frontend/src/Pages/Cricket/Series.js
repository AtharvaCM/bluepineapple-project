import { React, useState, useEffect } from "react";
import { Col, Container, Table, Row, Card, Button, Accordion } from "react-bootstrap";
import CricSubNavBar from "../../Components/Cricket/CricSubNavBar";
import SeriesApi from "../../Api/SeriesApi";
import Spinner from "../../Components/Spinner";

function Series() {
  const [series, setseries] = useState([]);
  const [seriesInfo, setseriesInfo] = useState([]);

  const clickHandler = (data) => {
    console.log(data);
    setseriesInfo(data);
  };

  useEffect(() => {
    SeriesApi()
      .then((data) => {
        console.log(data.data);
        setseries(data.data);
        setseriesInfo(data.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  if (series === [] || seriesInfo === []) {
    return <Spinner></Spinner>;
  } else {
    if (seriesInfo === []) {
      <Spinner></Spinner>;
    } else {
      return (
        <>
          <CricSubNavBar />
          <Container fluid>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                <Table striped bordered hover variant="dark" className="mt-2">
                    <thead>
                      <tr>
                        <th>Sr.no:1</th>
                        <th>Start Date:1/2/2022</th>
                        <th>End Date:2/2/2022</th>
                        <th>Series Name:ajsjjsj</th>
                        <th></th>
                      </tr>
                    </thead>
                  </Table>
                </Accordion.Header>
                <Accordion.Body>
                <Card border="primary" style={{ width: "30rem" }}>
                  <Card.Header
                    style={{ backgroundColor: "#696D97", fontSize: "1.5rem" }}
                  >
                    {seriesInfo.name}
                  </Card.Header>
                  <Card.Body style={{ backgroundColor: "#3F4156" }}>
                    <Table
                      striped
                      bordered
                      hover
                      variant="dark"
                      className="mt-2"
                    >
                      <thead>
                        <tr>
                          <th>Start Date</th>
                          <th>{seriesInfo.startDate}</th>
                        </tr>
                        <tr>
                          <th>End Date</th>
                          <th>{seriesInfo.endDate}</th>
                        </tr>
                        <tr>
                          <th>ODI</th>
                          <th>{seriesInfo.odi}</th>
                        </tr>
                        <tr>
                          <th>T20</th>
                          <th>{seriesInfo.t20}</th>
                        </tr>
                        <tr>
                          <th>Test Match</th>
                          <th>{seriesInfo.test}</th>
                        </tr>
                        <tr>
                          <th>Total Matches</th>
                          <th>{seriesInfo.matches}</th>
                        </tr>
                      </thead>
                    </Table>
                  </Card.Body>
                </Card>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/* <Row>
              <Col md={7}>
                <Table striped bordered hover variant="dark" className="mt-2">
                  <thead>
                    <tr>
                      <th>Sr.no</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Series Name</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {series.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{data.startDate}</td>
                          <td>{data.endDate}</td>
                          <td>{data.name}</td>
                          <th>
                            <Button onClick={() => clickHandler(data)}>
                              More Details
                            </Button>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>

              <Col className="mt-2 mb-2">
                <Card border="primary" style={{ width: "30rem" }}>
                  <Card.Header
                    style={{ backgroundColor: "#696D97", fontSize: "1.5rem" }}
                  >
                    {seriesInfo.name}
                  </Card.Header>
                  <Card.Body style={{ backgroundColor: "#3F4156" }}>
                    <Table
                      striped
                      bordered
                      hover
                      variant="dark"
                      className="mt-2"
                    >
                      <thead>
                        <tr>
                          <th>Start Date</th>
                          <th>{seriesInfo.startDate}</th>
                        </tr>
                        <tr>
                          <th>End Date</th>
                          <th>{seriesInfo.endDate}</th>
                        </tr>
                        <tr>
                          <th>ODI</th>
                          <th>{seriesInfo.odi}</th>
                        </tr>
                        <tr>
                          <th>T20</th>
                          <th>{seriesInfo.t20}</th>
                        </tr>
                        <tr>
                          <th>Test Match</th>
                          <th>{seriesInfo.test}</th>
                        </tr>
                        <tr>
                          <th>Total Matches</th>
                          <th>{seriesInfo.matches}</th>
                        </tr>
                      </thead>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row> */}
          </Container>
        </>
      );
    }
  }
}

export default Series;
