import { React, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import TeamSchedule from "../../../Api/TeamScheduleAPI";

function Schedule({ team }) {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    TeamSchedule(team)
      .then((response) => {
        setMatches(response.schedule);
      })
      .catch((err) => console.log(err));
  }, [team]);


  return (
    <>
      {matches === null || matches === undefined ? null : (
        <div >
          {matches.map((data, index) => {
            return (
              <Card
                key={index}
                style={{ backgroundColor: "white", color: "black" }}
                className="mb-2"
              >
                <Card.Header as="h5" style={{ fontWeight: "bold" }}>
                  {data.name}
                </Card.Header>
                <Card.Body>
                  <Card.Title>{data.status}</Card.Title>
                  <Row>
                    <Col sm="12" md="auto">
                      <Card.Text>Venue: {data.venue}</Card.Text>
                    </Col>
                    <Col sm="12" md="auto">
                      <Card.Text>Date: {data.date}</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>
                        Match Type: {data.matchType.toUpperCase()}
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Schedule;
