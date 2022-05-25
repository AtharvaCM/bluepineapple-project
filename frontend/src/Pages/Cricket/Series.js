import { React, useState, useEffect } from "react";
import { Table, ListGroup } from "react-bootstrap";
import CricSubNavBar from "../../Components/Navbar/CricSubNavBar";
import SeriesApi from "../../Api/SeriesAPI";
import Spinner from "../../Components/Spinner";
import { FormControl, Form } from 'react-bootstrap'

function Series() {
  const [series, setseries] = useState(null);
  const [search, setsearch] = useState("");

  useEffect(() => {
    SeriesApi()
      .then((data) => {

        setseries(data.series);
        //setsearch(data.series);
        //console.log(data.series);

      })
      .catch((err) => console.log(err));
  }, []);

  console.log(search);

  if (series === null) {
    return <Spinner></Spinner>;
  } else {
    return (
      <>
        <CricSubNavBar />
        {/* search bar */}
        <Form className="d-flex mt-2">
          <FormControl
            type="search"
            placeholder="Series Search"
            className="me-2 ms-2"
            aria-label="Search"
            style={{ backgroundColor: '#F2F2F2' }}
            onChange={(event) => { setsearch(event.target.value) }}
          />
        </Form>
        {
          series.filter((val) => {
            if (search === "") {
              return "";
            } else if (val.name.toLowerCase().includes(search)) {
              return val;
            }
          }).map((data, index) => {
            return (
              <ListGroup as="ul" className="mt-2" key={index}>
                <ListGroup.Item as="li" style={{ fontWeight: "bold", backgroundColor: '#A9A9A9' }} >
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

        {/* initial series list */}

        {
          search ===""?series.map((data, index) => {
            //console.log(data.name.toLowerCase());
            return (
              <ListGroup as="ul" className="mt-2" key={index}>
                <ListGroup.Item as="li" style={{ fontWeight: "bold", backgroundColor: '#DCDCDC' }} >
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
          }) :""
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
