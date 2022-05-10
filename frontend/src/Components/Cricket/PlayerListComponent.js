import { React, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import PlayerAPI from "../../Api/PlayerApi";

function PlayerListComponent({ team }) {
  const [players, setPlayers] = useState(null);

  const getPlayers = () => {
    PlayerAPI(team)
      .then((response) => setPlayers(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // get and set players if players != null
    if (players === null) {
      getPlayers();
    }
  });

  return (
    <>
      {players === null || players === undefined ? null : (
        <div className="container">
          <Card
            style={{ backgroundColor: "#3F4156", color: "white" }}
            className="mb-2"
          >
            {players.map((data, index) => {
              return (
                <div key={index}>
                  <h5>{data.id}</h5>
                  <h5>{data.team}</h5>name
                  <h5>{data.name}</h5>
                </div>
              );
            })}
          </Card>
        </div>
      )}
    </>
  );
}

export default PlayerListComponent;
