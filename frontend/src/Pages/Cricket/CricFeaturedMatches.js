import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import MatchInfo from "../../Api/MatchApi";
//import logo from '../../Resources/Images/Basketball.gif'
import Spinner from "../../Components/Spinner";

function CricFeaturedMatches() {
  const [match, setmatch] = useState(null);

  useEffect(() => {
    MatchInfo()
      .then((data) => {
        setmatch(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
        <Card className="mt-2 ms-2 me-3" style={{ backgroundColor: "#696D97" }}>
          <Card.Header style={{ backgroundColor: "#696D97", color: "white" }}>
            Featured Matches
          </Card.Header>
          <CardGroup>
            {limit.map((data, index) => {
              return (
                <Card
                  key={index}
                  style={{ backgroundColor: "#3F4156" }}
                  className="mt-1"
                >
                  <Card.Body>
                    <Card.Text
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "white",
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
        );
      </>
    );
  }
}

export default CricFeaturedMatches;
