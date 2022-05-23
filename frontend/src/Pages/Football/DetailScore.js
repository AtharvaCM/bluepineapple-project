import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Table, CardGroup } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import MatchStats from "../../Components/Football/MatchStats";
import FootballSubNavBar from "./FootballSubNavBar";

function DetailScore() {
  const location = useLocation();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const match = location.state.match;
    setMatch(match);
  }, [location.state.match]);

  const matchCard = () => {
    return (
      <Card
        className="mt-2 ms-5 me-5"
        style={{ boxShadow: "23px solid white", border: "none" }}
      >
        <Card.Header>
          <Table className="table table-borderless">
            <tbody>
              <tr>
                <td
                  style={{ fontSize: "35px", fontWeight: "bold" }}
                  colSpan={3}
                >
                  {match.event_home_team === null
                    ? "N/A"
                    : match.event_home_team}{" "}
                  VS{" "}
                  {match.event_away_team === null
                    ? "N/A"
                    : match.event_away_team}
                </td>
              </tr>

              <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
                <td>
                  Date : {match.event_date === null ? "N/A" : match.event_date}
                </td>
                <td>
                  Series :{" "}
                  {match.league_name === null ? "N/A" : match.league_name}
                </td>
                <td>
                  League Season :{" "}
                  {match.league_season === null ? "N/A" : match.league_season}
                </td>
                <td>
                  {match.league_round === null ? "N/A" : match.league_round}
                </td>
                <td>
                  Status :{" "}
                  {match.event_status === null ? (
                    "N/A"
                  ) : match.event_status === "Finished" ? (
                    <span
                      style={{
                        border: "5px",
                        backgroundColor: "green",
                        borderRadius: "5px",
                      }}
                    >
                      {match.event_status}
                    </span>
                  ) : (
                    match.event_status
                  )}
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Header>

        <Card.Body>
          <CardGroup>
            <Card border="light" style={{ border: "none" }}>
              <Card.Body
                style={{
                  height: "100px",
                  width: "250px",
                  alignSelf: "center",
                }}
              >
                <div style={{ width: "7rem" }}>
                  <Card.Img
                    style={{ height: "6rem" }}
                    variant="top"
                    src={
                      match.home_team_logo === null
                        ? "https://apiv2.allsportsapi.com/logo/4282_great-olympics.jpg"
                        : match.home_team_logo
                    }
                  />
                </div>
              </Card.Body>
            </Card>

            <Card border="light" style={{ border: "none" }}>
              <Card.Body
                style={{
                  height: "100px",
                  width: "250px",
                  alignSelf: "center",
                }}
              >
                <Card.Title
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Full time
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "50px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {match.event_ft_result === undefined
                    ? "N/A"
                    : match.event_ft_result}
                  {match.event_ft_result === undefined ? null : (
                    <Marquee
                      speed={25}
                      style={{ fontSize: "20px" }}
                      gradient={false}
                    >
                      {parseInt(match.event_ft_result.split("")[0]) >
                      parseInt(match.event_ft_result.split("")[4]) ? (
                        <h5 style={{ color: "green" }}>
                          {match.event_home_team}{" "}
                        </h5>
                      ) : parseInt(match.event_ft_result.split("")[0]) <
                        parseInt(match.event_ft_result.split("")[4]) ? (
                        <h5 style={{ color: "green" }}>
                          {match.event_away_team}
                        </h5>
                      ) : (
                        <h5 style={{ color: "blue" }}>Match Drawn</h5>
                      )}
                    </Marquee>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card border="light" style={{ border: "none" }}>
              <Card.Body
                style={{
                  height: "150px",
                  width: "250px",
                  alignSelf: "center",
                }}
              >
                <div style={{ width: "7rem" }}>
                  <Card.Img
                    variant="top"
                    src={
                      match.away_team_logo === null
                        ? "N/A"
                        : match.away_team_logo
                    }
                    style={{ height: "7rem" }}
                  />
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <FootballSubNavBar></FootballSubNavBar>
      {match === null ? null : matchCard()}
      <div className="mt-4"></div>
      {match === null ? null : <MatchStats match={match}></MatchStats>}
    </>
  );
}

export default DetailScore;
