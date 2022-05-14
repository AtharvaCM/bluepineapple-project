import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import Schedule from "./Schedule";
import TeamNews from "../../Components/Cricket/TeamNews";
import CricSubNavBar from "../../Components/Cricket/CricSubNavBar";
import PlayerList from "../../Components/Cricket/PlayerList";
import TeamStats from "../../Components/Cricket/TeamStats";
import TeamInfoAPI from "../../Api/TeamInfoAPI";

function TeamInfo() {
  const location = useLocation();
  const teamID = location.state.id;
  const [team, setTeam] = useState(null);
  const [activeComponent, setActiveComponent] = useState("schedule");

  const clickHandler = (e) => {
    console.log(e, "clicked");
    setActiveComponent(e);
  };

  const getTeam = () => {
    TeamInfoAPI(teamID)
      .then((response) => setTeam(response.team))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (team === null) {
      getTeam();
    }
  });

  return (
    <>
      <CricSubNavBar></CricSubNavBar>
      <div className="container mt-2 mb-2">
        {team === null || team === undefined ? null : (
          <Card style={{backgroundColor:'white'}}>
            <Card.Header>
              <Card.Text style={{ fontSize: "30px", fontWeight: "bold" }}>
                {team.name}
              </Card.Text>
              <span
                className="me-5 teamSpan"
                onClick={() => clickHandler("schedule")}
              >
                Schedule
              </span>
              <span
                className="me-5 teamSpan"
                onClick={() => clickHandler("news")}
              >
                News
              </span>
              <span
                className="me-5 teamSpan"
                onClick={() => clickHandler("players")}
              >
                Players
              </span>
              <span
                className="me-5 teamSpan"
                onClick={() => clickHandler("stats")}
              >
                Stats
              </span>
            </Card.Header>
          </Card>
        )}
      </div>

      {team === null || team === undefined ? null : activeComponent ===
        "schedule" ? (<Schedule team={team.name}></Schedule>) : activeComponent === "news" ? (
        <TeamNews></TeamNews>
      ) : activeComponent === "players" ? (
        <PlayerList team={team.name}></PlayerList>
      ) : activeComponent === "stats" ? (
        <TeamStats team={team}></TeamStats>
      ) : null}
    </>
  );
}

export default TeamInfo;
