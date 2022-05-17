import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import CricRankingNavbar from "../../../Components/Cricket/Ranking/CricRankingNavbar";
import { Button, Card, Table, Container } from "react-bootstrap";
import CricSubNavBar from "../../../Components/Cricket/CricSubNavBar";
import { useHistory } from "react-router-dom";
import {
  CricRankTestApi,
  CricRankOdiApi,
  CricRankT20Api,
} from "../../../Api/PlayerRankingApi";

function CricRankBatting() {
  let history = useHistory();

  const [Details, setDetails] = useState(null);

  useEffect(() => {
    CricRankTestApi()
      .then((response) => {
        setDetails(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(Details);

  const routeChange = (e) => {
    history.push({
      pathname: "/Cricket/players/Playernfo",
      state: { e },
    });
  };

  const changeData = (Data) => {
    if (Data === "Test") {
      CricRankTestApi()
        .then((response) => {
          setDetails(response.data);
        })
        .catch((err) => console.log(err));
    } else if (Data === "ODI") {
      CricRankOdiApi()
        .then((response) => {
          setDetails(response.data);
        })
        .catch((err) => console.log(err));
    } else if (Data === "T20") {
      CricRankT20Api()
        .then((response) => {
          setDetails(response.data);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <CricSubNavBar />
      <CricRankingNavbar />
      <div className="container">
        <Card
          style={{ backgroundColor: "#3F4156", color: "white" }}
          className="mx-auto, w-100 ,my-auto mb-2 mt-2"
        >
          <div className="mt-3 mb-3">
            <Button
              onClick={() => changeData("Test")}
              style={{
                textDecoration: "none",
                color: "black",
                borderRadius: 20,
              }}
              className="mx-4 w-25"
            >
              Test
            </Button>
            <Button
              onClick={() => changeData("ODI")}
              style={{
                textDecoration: "none",
                color: "black",
                borderRadius: 20,
              }}
              className="mx-4 w-25"
            >
              ODI
            </Button>
            <Button
              onClick={() => changeData("T20")}
              style={{
                textDecoration: "none",
                color: "black",
                borderRadius: 20,
              }}
              className="mx-4 w-25"
            >
              T20
            </Button>
          </div>
          <Container>
            <Table responsive className="border-less">
              <tr style={{ backgroundColor: "gray" }}>
                <th style={{ fontSize: "3.5vh" }}>Pos</th>
                <th
                  colSpan={2}
                  style={{ textAlign: "center", fontSize: "3.5vh" }}
                >
                  Batsman
                </th>
              </tr>
              {Details === null
                ? null
                : Details.map((player) => {
                    return (
                      <tr key={player.id}>
                        <td>{player.id}</td>
                        <td>
                          <img
                            src={player.img_src}
                            alt=".."
                            style={{
                              width: "100px",
                              height: "100px",
                              borderRadius: "50px",
                            }}
                          ></img>
                        </td>
                        <td>
                          <h4 onClick={() => routeChange(player)}>
                            {player.name}
                          </h4>
                        </td>
                      </tr>
                    );
                  })}
            </Table>
          </Container>
        </Card>
      </div>
    </>
  );
}
export default CricRankBatting;