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
              <div className="mx-5">
              <Table  style={{backgroundColor:'#F7F7F7'}}>
                <thead>
                <tr >
                  <th style={{ fontSize: "3.5vh" }}>Position</th>
                  <th style={{ fontSize: "3.5vh" }}></th>
                  <th
                    style={{ textAlign: "center", fontSize: "3.5vh" }}
                  >
                    Bowler
                  </th>
                </tr>
                </thead>
                <tbody>
                {Details === null
                  ? null
                  : Details.map((player,index) => {
                    return (
                      <tr key={player.id} style={{cursor:'pointer'}}>
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
                  </tbody>
              </Table>
              </div>
          </Card>
        
      </div>
    </>
  );
}
export default CricRankBowling;