import { React, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import PlayerAPI from "../../../Api/PlayerAPI";

function PlayerListComponent({ team }) {
  const [players, setPlayers] = useState(null);

  const getPlayers = () => {
    PlayerAPI(team)
      .then((response) => setPlayers(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // get and set players if players != null
    if (players === null) {
      getPlayers();
    }
  });

  return (
    <>
      {players === null || players === undefined ? null : (
        <div>
          <Row>
            {players.map((data, index) => {
              return (
                <Col key={index} sm="10" md="4">
                  <Card
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      height: "95%",
                    }}
                    className="mb-2"
                  >
                    <Card.Body>
                      <Row>
                        <Col sm="12" md="5">
                          <Image
                            roundedCircle="true"
                            src={data.img_src}
                            height="150"
                            width="150"
                          ></Image>
                        </Col>

                        <Col>
                          <Card.Text as="h5">
                            <b>{data.name}</b>
                          </Card.Text>
                          <Card.Text>
                            <b>Date of Birth:</b> {data.date_of_birth}
                          </Card.Text>
                          <Card.Text>
                            <b>Birth Place:</b> {data.birth_place}
                          </Card.Text>
                          <Card.Text>
                            <b>Role:</b> {data.role}
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      )}
    </>
  );
}

export default PlayerListComponent;
