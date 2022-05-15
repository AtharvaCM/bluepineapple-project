/*

Created: 13th, May, 2022
Synopsis: Job which gets Football Players List for current leagues from the API provider
Exports: 
================
  UNUSED FILE
================
*/
console.log("[+] Fetching Football Players Info from https://allsportsapi.com");
=======
Created: 12th, May, 2022
Synopsis: Job which gets Football PLayers List data from the API provider
Exports: 
*/
console.log(
  "[+] Fetching Football Players Info for Current Leagues from https://allsportsapi.com"
);


const connectToMongo = require("../dbConfig");
const fetch = require("node-fetch");


const PlayerIndexFootball = require("../models/football/playerIndexModel");

const getPlayer = async (player_key) => {

const PlayerFootball = require("../models/football/playerModel");

// Returns list of player objects for different teams for which the player is playing
const getPlayerFootball = async (player_key) => {
  try {
    const allSportsAPIKey = process.env.ALL_SPORTS_API_KEY;
    const url = `https://apiv2.allsportsapi.com/football/?met=Players&playerId=${player_key}&APIkey=${allSportsAPIKey}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {},
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(`{ error: ${err.message || err.toString()} }`);
  }
};

const addPlayer = (obj) => {

  let newPlayer = new PlayerFootball({});

  let newPlayer = new PlayerFootball({
    team_key: obj.team_key,
    team_name: obj.team_name,
    team_logo: obj.team_logo,
    players: obj.players,
    coaches: obj.coaches,
  });

  newPlayer.save((err) => {
    if (!err) {
      console.log("[+] Player Added successfully");
    } else {
      console.log("[+] Error during insertion" + err);
    }
  });
};

const updatePlayer = (obj) => {
  const query = { player_key: String(obj.player_key) };
  const replacement = obj;

  PlayerFootball.findOneAndReplace(
    query,
    replacement,
    null,
    function (err, doc) {
      if (err) {
        console.log("[+] Update Error", err);
      } else {
        console.log("Original Doc");
      }
    }
  );

  PlayerFootball.findOneAndReplace(query, replacement, null, function (err, doc) {
    if (err) {
      console.log("[+] Update Error", err);
    } else {
      console.log("Original Doc");
    }
  });

};

const storeResponse = (req) => {
  try {
    const result = req["result"];
    const success = req["success"];
    // console.log("[+] data", data);
    console.log("[+] success", success);

    // push each object in the data arrray to DB
    result.map((obj) => {

      PlayerFootball.findOne(
        { player_key: obj.player_key },
        function (err, doc) {
          if (err) {
            console.log("[+] Find Error", err);
          } else {
            // if doc is null create doc if not null update doc
            doc === null ? addPlayer(obj) : updatePlayer(obj);
          }
        }
      );

        PlayerFootball.findOne({ player_key: obj.player_key }, function (err, doc) {
        if (err) {
          console.log("[+] Find Error", err);
        } else {
          // if doc is null create doc if not null update doc
          doc === null ? addPlayer(obj) : updatePlayer(obj);
        }
      });

    });
  } catch (err) {
    console.log(`[+] Error: ${err.message || err.toString()}`);
  }
};


const playersList = getResponse();

connectToMongo()
  .then(() => {
    playersList
      .then((res) => storeResponse(res))

const getFootballLeaguesList = async () => {
  try {
    const allSportsAPIKey = process.env.ALL_SPORTS_API_KEY;
    const url = `https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${allSportsAPIKey}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {},
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(`{ error: ${err.message || err.toString()} }`);
  }
};

const leaguesList = getFootballLeaguesList();

// Fetch all the leagues and for every league fetch the teams playing in that league
// Store all the teams in to DB
connectToMongo()
  .then(() => {
    leaguesList
      .then((res) => {
        res.result.map((obj) => {
          const teamsList = getResponse(obj.league_key);
          teamsList
            .then((res) => storeResponse(res))
            .catch((err) => console.log(err));
        });
      })

      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
