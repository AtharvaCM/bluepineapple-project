import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import CricRankingNavbar from "../../../Components/Cricket/Ranking/CricRankingNavbar";
import { Button, Card, Table, Container } from "react-bootstrap";
import CricSubNavBar from "../../../Components/Navbar/CricSubNavBar";
import { useHistory } from "react-router-dom";
import { CricRankBowlingkTestApi,CricRankBowlingkOdiApi,CricRankBowlingkT20Api} from "../../../Api/PlayerRankingApi";

function CricRankBowling() {
  let history = useHistory();

  const [Details, setDetails] = useState(null);

  useEffect(() => {
    CricRankBowlingkTestApi()
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
      CricRankBowlingkTestApi()
        .then((response) => {
          setDetails(response.data);
        })
        .catch((err) => console.log(err));
    } else if (Data === "ODI") {
      CricRankBowlingkOdiApi()
        .then((response) => {
          setDetails(response.data);
        })
        .catch((err) => console.log(err));
    } else if (Data === "T20") {
      CricRankBowlingkT20Api()
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
      <div>
        <Container>
          <Card

            className="mx-auto, w-100 ,my-auto mb-2 mt-2" >
            <div className="mt-3 mb-3 d-flex justify-content-center">
              <Button
                onClick={() => changeData("Test")}
                style={{
                  textDecoration: "none",
                  color: "black",
                  borderRadius: 20,
                  backgroundColor: "#00796b"
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
                  backgroundColor: "#00796b"
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
                  backgroundColor: "#00796b"
                }}
                className="mx-4 w-25"
              >
                T20
              </Button>
            </div>
            {/* <Container> */}
              <div className="mx-5">
              <Table responsive className="border-less" striped bordered hover style={{backgroundColor:'#ffffe6'}}>
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
                  : Details.map((player,index) => {
                    return (
                      <tr key={player.id}>
                        <td>{index+1}</td>
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
                          <h4 onClick={() => routeChange(player)} style={{ color: 'black' }}>
                            {player.name}
                          </h4>
                        </td>
                      </tr>
                    );
                  })}
              </Table>
              </div>
            {/* </Container> */}
          </Card>
        </Container>
      </div>
    </>
  );
}
export default CricRankBowling;