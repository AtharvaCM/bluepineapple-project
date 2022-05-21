import { React, useState, useEffect } from "react";
import { Table, ListGroup } from "react-bootstrap";
import CricSubNavBar from "../../Components/Navbar/CricSubNavBar";
import SeriesApi from "../../Api/SeriesAPI";
import Spinner from "../../Components/Spinner";

function Series() {
  const [series, setseries] = useState(null);

  useEffect(() => {
    SeriesApi()
      .then((data) => {
        console.log(data.series[0]);
        setseries(data.series);
        //setseriesInfo(data.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  if (series === null) {
    return <Spinner></Spinner>;
  } else {
    return (
      <>
        <CricSubNavBar />

        {
          series.map((data, index) => {
            return (
              <ListGroup as="ul" className="mt-2" key={index}>
                <ListGroup.Item as="li" style={{ fontWeight: "bold",backgroundColor:'#DCDCDC'}} >
                {series ? data.name : ""}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Table
                    striped
                    bordered
                    hover
                    variant="light"
                    className="mt-2"
                  >
                    <thead>
                      <tr>
                        <th>Start Date</th>
                        <th>{series ? data.startDate : ""}</th>
                      </tr>
                      <tr>
                        <th>End Date</th>
                        <th>{series ? data.endDate : ""}</th>
                      </tr>
                      <tr>
                        <th>ODI</th>
                        <th>{series ? data.odi : ""}</th>
                      </tr>
                      <tr>
                        <th>T20</th>
                        <th>{series ? data.t20 : ""}</th>
                      </tr>
                      <tr>
                        <th>Test Match</th>
                        <th>{series ? data.test : ""}</th>
                      </tr>
                      <tr>
                        <th>Total Matches</th>
                        <th>
                          {series
                            ? data.odi + data.t20 + data.test
                            : ""}
                        </th>
                      </tr>
                    </thead>
                  </Table>
                </ListGroup.Item>


              </ListGroup>
            )
          })
        }
        {/* <Container fluid>
          <Accordion className="mt-2 mb-2" alwaysOpen>
            {series.map((data, index) => {
              return (
                <Accordion.Item key={index}>
                  <Accordion.Header>
                    <h5 style={{ fontWeight: "bold" }}>
                      {index + 1}.{series ? data.name : ""}
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: "white" }}>
                    <Container>
                      <Card style={{ border: "none" }}>
                        <Card.Body style={{ backgroundColor: "white" }}>
                          <Table
                            striped
                            bordered
                            hover
                            variant="light"
                            className="mt-2"
                          >
                            <thead>
                              <tr>
                                <th>Start Date</th>
                                <th>{series ? data.startDate : ""}</th>
                              </tr>
                              <tr>
                                <th>End Date</th>
                                <th>{series ? data.endDate : ""}</th>
                              </tr>
                              <tr>
                                <th>ODI</th>
                                <th>{series ? data.odi : ""}</th>
                              </tr>
                              <tr>
                                <th>T20</th>
                                <th>{series ? data.t20 : ""}</th>
                              </tr>
                              <tr>
                                <th>Test Match</th>
                                <th>{series ? data.test : ""}</th>
                              </tr>
                              <tr>
                                <th>Total Matches</th>
                                <th>
                                  {series
                                    ? data.odi + data.t20 + data.test
                                    : ""}
                                </th>
                              </tr>
                            </thead>
                          </Table>
                        </Card.Body>
                      </Card>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Container> */}
      </>
    );
  }
}

export default Series;
