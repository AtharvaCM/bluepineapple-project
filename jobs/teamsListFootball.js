/*
Created: 11th, May, 2022
Synopsis: Job which gets Football Teams List data from the API provider
Exports: 
*/
console.log(
  "[+] Fetching Football Teams Info for Current Leagues from https://allsportsapi.com"
);

const connectToMongo = require("../dbConfig");
const fetch = require("node-fetch");

const TeamFootball = require("../models/football/teamModel");

const getResponse = async (league_key) => {
  try {
    const allSportsAPIKey = process.env.ALL_SPORTS_API_KEY;
    const url = `https://apiv2.allsportsapi.com/football/?met=Teams&leagueId=${league_key}&APIkey=${allSportsAPIKey}`;
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

const addTeam = (obj) => {
  let newTeam = new TeamFootball({
    team_key: obj.team_key,
    team_name: obj.team_name,
    team_logo: obj.team_logo,
    players: obj.players,
    coaches: obj.coaches,
  });
  newTeam.save((err) => {
    if (!err) {
      console.log("[+] Team Added successfully");
    } else {
      console.log("[+] Error during insertion" + err);
    }
  });
};

const updateTeam = (obj) => {
  const query = { team_key: String(obj.team_key) };
  const replacement = obj;
  TeamFootball.findOneAndReplace(query, replacement, null, function (err, doc) {
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
      TeamFootball.findOne({ team_key: obj.team_key }, function (err, doc) {
        if (err) {
          console.log("[+] Find Error", err);
        } else {
          // if doc is null create doc if not null update doc
          doc === null ? addTeam(obj) : updateTeam(obj);
        }
      });
    });
  } catch (err) {
    console.log(`[+] Error: ${err.message || err.toString()}`);
  }
};

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
