import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import TeamSubNavBar from "../../Components/Cricket/Team/TeamSubNavBar";
import CricSubNavBar from "../../Components/Navbar/CricSubNavBar";
import TeamsAPI from "../../Api/TeamsListAPI";

import { useHistory } from "react-router-dom";

function MensTeam() {
  const [teams, setTeams] = useState(null);
  

  const getTeams = () => {
    TeamsAPI()
      .then((response) => {
        setTeams(response.teams);
        console.log(response.teams);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (teams === null) {
      getTeams();
    }
  });

  let history = useHistory();
  const routeChange = (e) => {
    console.log(e);
    history.push({
      pathname: "/Cricket/Team/TeamInfo",
      state: { id: e }, //passing prop to the component
    });
    //console.log(history.push('/'))
  };

  return (
    <>
      <CricSubNavBar></CricSubNavBar>
      <TeamSubNavBar></TeamSubNavBar>
      <div className="container">
        <Card
          style={{ backgroundColor: "white", color: "black" }}
          className="mb-2 mt-2"
        >
          {teams === null || teams === undefined ? null : (
            <div className="grid">
              {teams.map((team, index) => {
                return (
                  <div
                    key={index}
                    className="gridItem mt-4 mb-2 ms-2"
                    onClick={() => routeChange(team.id)}
                  >
                    <img className="gridImage" src={team.flag} alt="logo"></img>
                    <b className="ms-2" style={{ fontSize: "25px" }}>
                      {team.name}
                    </b>
                  </div>
                );
              })}
            </div>
          )}
        </Card>
      </div>
    </>
  );
}

export default MensTeam;
