import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup} from "react-bootstrap";
import { useEffect, useState } from "react";
import CurrentMatchesAPI from "../../Api/CurrentMatchesAPI";
import Spinner from "../../Components/Spinner";
import { MdFeaturedPlayList } from "react-icons/md";
import Marquee from "react-fast-marquee";

function CricFeaturedMatches() {
  const [match, setmatch] = useState(null);

  useEffect(() => {
    CurrentMatchesAPI()
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
        <Card style={{backgroundColor:'#F7F7F7'}}>
          <Card.Header>
          <Marquee gradient={false} speed={30}>
            {match.map((data)=>{
            return(
              <>
              <span>&nbsp;&nbsp;||&nbsp;&nbsp;</span>
              <span style={{color:'blue'}}>{ data.status}</span>
              </>
            )
          }
            
            )}

            </Marquee>
          </Card.Header>
        </Card>

        <Card className="mt-2 ms-2 me-3" style={{ backgroundColor: "#C8CDCD" }}>
          <Card.Header style={{ backgroundColor: "#dcdcdc", color: "black" }}>
            <MdFeaturedPlayList /> Featured Matches
          </Card.Header>
          <CardGroup>
            {limit.map((data, index) => {
              return (
                <Card
                  key={index}
                  style={{ backgroundColor: "whitesmoke" }}
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
      </>
    );
  }
}

export default CricFeaturedMatches;
