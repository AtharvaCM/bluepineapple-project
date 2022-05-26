import { React, useEffect, useState } from "react";
import FinishedMatches from "../../Api/footballApi/FinishedMatches";
import { Card, Table, CardGroup } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import { useHistory } from "react-router-dom";
import FootballSubNavBar from "./FootballSubNavBar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function CurrentMatches() {
  const [currentMatches, setcurrentMatches] = useState(null);
  const [sort, setsort] = useState(null);
  const [seriesOptions, setseriesOption] = useState("All");
  const [leagueOptions, setlegueOptions] = useState("2022");
  // eslint-disable-next-line no-unused-vars
  const [matchStatus, setmatchStatus] = useState("Completed");

  const SeriesType = ["All", "Premier League", "Cup - Round of 32"];
  const seasonType = ["2022", "2021/22"];
  const matchType = ["Completed", "Ongoing", "All"];

  useEffect(() => {
    FinishedMatches().then((data) => {
      setcurrentMatches(data.matches);
      console.log(data.matches);
      setsort(data.matches);
    });
  }, []);

  let history = useHistory();

  const cardClickHadler = (e) => {
    history.push({
      pathname: "/football/Scores/MatchSummary",
      state: { match: e }, //passing prop to the component
    });
  };

  const seriesHandler = (e) => {
    setseriesOption(e);

    if (e === "Premier League") {
      const updatedMatches = currentMatches.filter((data) => {
        return data.league_name === e;
      });
      setsort(updatedMatches);
    }

    if (e === "Cup - Round of 32") {
      const updatedMatches = currentMatches.filter((data) => {
        return data.league_name === e;
      });
      setsort(updatedMatches);
    }

    if (e === "All") {
      FinishedMatches().then((data) => {
        setsort(data.matches);
      });
    }
  };

  const seasonHandler = (e) => {
    setlegueOptions(e);

    if (e === "2021/2022") {
      const updatedMatches = currentMatches.filter((data) => {
        return data.league_season === e;
      });
      setsort(updatedMatches);
    }

    if (e === "2022") {
      const updatedMatches = currentMatches.filter((data) => {
        return data.league_season === e;
      });
      setsort(updatedMatches);
    }
  };

  return (
    <>
      <FootballSubNavBar></FootballSubNavBar>
      <Card>
        <Card.Header>
          <TextField
            id="filled-hidden-label-small"
            select
            value={seriesOptions}
            variant="filled"
            size="small"
            sx={{ ml: 4, width: 200 }}
            helperText="Leagues"
          >
            {SeriesType.map((option) => (
              <MenuItem
                key={option}
                value={option}
                onClick={() => seriesHandler(option)}
              >
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="filled-hidden-label-small"
            select
            value={matchStatus}
            variant="filled"
            size="small"
            sx={{ ml: 5, width: 200 }}
            helperText="Match Status"
          >
            {matchType.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="filled-hidden-label-small"
            select
            value={leagueOptions}
            variant="filled"
            size="small"
            sx={{ ml: 5, width: 200 }}
            helperText="Season"
          >
            {seasonType.map((option) => (
              <MenuItem
                key={option}
                value={option}
                onClick={() => seasonHandler(option)}
              >
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Card.Header>
      </Card>

      {sort
        ? sort.map((data, index) => {
            return (
              <Card
                className="mt-2"
                onClick={() => cardClickHadler(data)}
                style={{
                  boxShadow: "23px solid white",
                  border: "none",
                  cursor: "pointer",
                }}
                key={index}
              >
                <Card.Header>
                  <Table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td style={{ fontSize: "35px" }} colSpan={3}>
                          {sort === null ? "N/A" : data.event_home_team} vs{" "}
                          {sort === null ? "N/A" : sort[0].event_away_team}
                        </td>
                      </tr>

                      <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
                        {/* <td>Venue : {sort === null ? 'N/A' : data.event_stadium}</td> */}
                        <td>
                          Date : {sort === null ? "N/A" : data.event_date}
                        </td>
                        <td>
                          Series : {sort === null ? "N/A" : data.league_name}
                        </td>
                        <td>
                          League Season :{" "}
                          {sort === null ? "N/A" : data.league_season}
                        </td>
                        <td>{sort === null ? "N/A" : data.league_round}</td>
                        <td>
                          Status :{" "}
                          {sort === null ? (
                            "N/A"
                          ) : data.event_status === "Finished" ? (
                            <span
                              style={{ border: "5px", borderRadius: "5px" }}
                            >
                              {data.event_status}
                            </span>
                          ) : (
                            data.event_status
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
                              data.home_team_logo === null
                                ? "https://apiv2.allsportsapi.com/logo/4282_great-olympics.jpg"
                                : data.home_team_logo
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
                          {currentMatches === null
                            ? "N/A"
                            : data.event_ft_result}
                          <Marquee
                            speed={25}
                            style={{ fontSize: "20px" }}
                            gradient={false}
                          >
                            {parseInt(data.event_ft_result.split("")[0]) >
                            parseInt(data.event_ft_result.split("")[4]) ? (
                              <h5 style={{ color: "green" }}>
                                {data.event_home_team}{" "}
                              </h5>
                            ) : parseInt(data.event_ft_result.split("")[0]) <
                              parseInt(data.event_ft_result.split("")[4]) ? (
                              <h5 style={{ color: "green" }}>
                                {data.event_away_team}
                              </h5>
                            ) : (
                              <h5 style={{ color: "blue" }}>Match Drawn</h5>
                            )}
                          </Marquee>
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
                              currentMatches === null
                                ? "N/A"
                                : data.away_team_logo
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
          })
        : ""}
    </>
  );
}

export default CurrentMatches;
