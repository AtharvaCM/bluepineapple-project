import { React, useEffect, useState } from "react";
import {
  Card,
  CardGroup,
  Button,
  Table,
  Dropdown,
} from "react-bootstrap";
import CricSubNavBar from "../../Components/Navbar/CricSubNavBar";
import currentMatchesApi from "../../Api/CurrentMatchesAPI";
import Spinner from "../../Components/Spinner";
import Marquee from "react-fast-marquee";

function LiveScores() {
  const [currentMatches, setcurrentMatches] = useState(null);
  const [sortdata, setsortdata] = useState(null);
  const [sortdate, setsortDate] = useState(null);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    currentMatchesApi()
      .then((data) => {
        
        setcurrentMatches(data.data);
        setsortdata(data.data);
        setsortDate(data.data);
      })
      .catch((err) => console.log(err));
  };

 

  const matchHandler = (e) => {
    if (e === "t20") {
      const updatedMatches = currentMatches.filter((data) => {
        return data.matchType === e;
      });
      setsortdata(updatedMatches);
     
    }

    if (e === "odi") {
      const updatedMatches = currentMatches.filter((data) => {
        return data.matchType === e;
      });
      setsortdata(updatedMatches);
      
    }

    if (e === "test") {
      const updatedMatches = currentMatches.filter((data) => {
        return data.matchType === e;
      });
      setsortdata(updatedMatches);
      
    }

    if (e === "all") {
      setsortdata(currentMatches);
      
    }
  };

  const dateHandler = (e) => {

    if (e === "ascending") {
      const date = sortdate.sort(function (a, b) {
        let c = a.date;
        let d = b.date;
        if (c < d) {
          return -1;
        }

        if (c > d) {
          return 1;
        }

        return 0;
      });

      setsortdata(date);
    }

    if (e === "descending") {
      const date = sortdate
        .sort(function (a, b) {
          let c = a.date;
          let d = b.date;
          if (c < d) {
            return -1;
          }

          if (c > d) {
            return 1;
          }

          return 0;
        })
        .reverse();

      setsortdata(date);
      
    }

   
  };

  

  if (currentMatches === null) {
    return <Spinner></Spinner>;
  } else {
    
    return (
      <>
        <CricSubNavBar></CricSubNavBar>

            <Card>
              <Card.Header>
                <Dropdown className="d-inline mx-5">
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "#E9DCC9",
                      border: "none",
                      color: "black",
                    }}
                  >
                    Match Type
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => matchHandler("test")}>
                      Test
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => matchHandler("t20")}>
                      T20
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => matchHandler("odi")}>
                      ODI
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => matchHandler("all")}>
                      All
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* //sort by date */}
                <Dropdown className="d-inline mx-5">
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "#E9DCC9",
                      border: "none",
                      color: "black",
                    }}
                  >
                    Sort by Date
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => dateHandler("ascending")}>
                      LATEST
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dateHandler("descending")}>
                      OLDEST
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Header>
            </Card>
          
        
        {sortdata ? (
          sortdata.map((data, index) => {
            return (
                
                  <Card className="mt-2 mb-2" bg="light" key={index}>
                    <Card.Header>
                      <Table
                        className="table table-borderless"
                        style={{ backgroundColor: "white" }}
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                fontSize: "35px",
                                fontWeight: "bold",
                                color: "black",
                              }}
                              colSpan={3}
                            >
                              {data.name}
                            </td>
                          </tr>

                          <tr
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            <td>Venue : {data.venue}</td>
                            <td>Date : {data.date}</td>
                            <td>
                              Match Type :{" "}
                              {data.hasOwnProperty("matchType")
                                ? data.matchType
                                : "N/A"}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Header>

                    <Card.Body>
                      <CardGroup>
                        <Card style={{ borderColor: "white" }}>
                          <Card.Body
                            style={{
                              height: "250px",
                              width: "250px",
                              alignSelf: "center",
                            }}
                          >
                            <Card.Img
                              variant="top"
                              src={data.teamInfo[0].img}
                            />
                          </Card.Body>
                        </Card>

                        <Card style={{ borderColor: "white" }}>
                          <Card.Body
                            style={{
                              height: "250px",
                              width: "250px",
                              alignSelf: "center",
                            }}
                          >
                            <Card.Title
                              style={{
                                textAlign: "left",
                                fontWeight: "bold",
                                fontSize: "17px",
                                color: "#00796B",
                              }}
                            >
                              <Marquee gradient={false} speed={30}> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Status : {data.status}</Marquee>
                            </Card.Title>

                            <Card.Text
                              style={{
                                fontSize: "20px",
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "black",
                                marginTop: "25px",
                              }}
                            >
                              {data.teamInfo[0].shortname} :{" "}
                              {data.score[0] ? data.score[0].r : "-"} /{" "}
                              {data.score[0] ? data.score[0].w : "-"} (
                              {data.score[0] ? data.score[0].o : "-"})
                            </Card.Text>

                            <Card.Text
                              style={{
                                fontSize: "20px",
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "black",
                              }}
                            >
                              {data.teamInfo[1]
                                ? data.teamInfo[1].shortname
                                : ""}{" "}
                              : {data.score[1] ? data.score[1].r : "-"} /{" "}
                              {data.score[1] ? data.score[1].w : "-"} (
                              {data.score[1] ? data.score[1].o : "-"})
                            </Card.Text>
                          </Card.Body>
                          <Button
                            style={{
                              alignSelf: "center",
                              backgroundColor: "#71C6DD",
                              fontWeight: "bold",
                            }}
                            onClick={() => window.location.reload(false)}
                          >
                            Refresh
                          </Button>
                        </Card>

                        <Card
                          style={{
                            backgroundColor: "white",
                            borderColor: "white",
                          }}
                        >
                          <Card.Body
                            style={{
                              height: "250px",
                              width: "250px",
                              alignSelf: "center",
                            }}
                          >
                            <Card.Img
                              variant="top"
                              src={
                                data.teamInfo[1]
                                  ? data.teamInfo[1].img
                                  : "https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/cricket-logo-maker/All-Star-Cricket-Team-Logo-Maker-for-Cricket-Teams.png"
                              }
                            />
                          </Card.Body>
                        </Card>
                      </CardGroup>
                    </Card.Body>
                  </Card>
            );
          })
        ) : (
          <Spinner></Spinner>
        )}
      </>
    );
  }
}

export default LiveScores;
