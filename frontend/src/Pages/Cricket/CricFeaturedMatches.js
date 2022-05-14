import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CurrentMatchesApi from "../../Api/CurrentMatchesApi";
import Spinner from "../../Components/Spinner";
import { MdFeaturedPlayList } from 'react-icons/md'

function CricFeaturedMatches() {
  const [match, setmatch] = useState(null);

  useEffect(() => {
    CurrentMatchesApi()
      .then((data) => {
        setmatch(data.data);
      })
      .catch((err) => console.log(err));
  }, [])

  console.log(match);

  if (match === null) {
    return (
      <>
        <div className="container align-middle">
          <Spinner></Spinner>
        </div>
      </>
    );
  } else {
    let limit = match.slice(0, 4);
    return (
      <>
        <Container>
          <Container>
            <Card className="mt-2 " style={{ backgroundColor: "#A5DFD2" }}>
              <Card.Header style={{ backgroundColor: "#A5DFD2", color: "black" }}>
                <MdFeaturedPlayList /> Featured Matches
              </Card.Header>
              <CardGroup>
                {limit.map((data, index) => {
                  return (
                    <Card
                      key={index}
                      style={{ backgroundColor: "whitesmoke" }}
                      className="mt-1"
                    >
                      <Card.Body>
                        <Card.Text
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "black",
                          }}
                        >
                          {data.name}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </CardGroup>
            </Card>
            </Container>
            </Container>
          </>
          );
  }
}

          export default CricFeaturedMatches;
