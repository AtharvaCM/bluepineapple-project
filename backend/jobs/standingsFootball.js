/*
Created: 14th, May, 2022
Synopsis: Job which gets Football Standings data from the API provider
Exports: 
*/
console.log(
  "[+] Fetching Football Standings Info from https://allsportsapi.com"
);

const connectToMongo = require("../dbConfig");
const fetch = require("node-fetch");

const StandingsFootball = require("../models/football/standingsModel");

const getStandings = async (league_key) => {
  try {
    const allSportsAPIKey = process.env.ALL_SPORTS_API_KEY;
    const url = `https://apiv2.allsportsapi.com/football/?met=Standings&leagueId=${league_key}&APIkey=${allSportsAPIKey}`;
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

const addStanding = (obj) => {
  let newStanding = new StandingsFootball({
    standing_place: obj.standing_place,
    standing_place_type: obj.standing_place_type,
    standing_team: obj.standing_team,
    standing_P: obj.standing_P,
    standing_W: obj.standing_W,
    standing_D: obj.standing_D,
    standing_L: obj.standing_L,
    standing_F: obj.standing_F,
    standing_A: obj.standing_A,
    standing_GD: obj.standing_GD,
    standing_PTS: obj.standing_PTS,
    team_key: obj.team_key,
    league_key: obj.league_key,
    league_season: obj.league_season,
    league_round: obj.league_round,
    standing_updated: obj.standing_updated,
    fk_stage_key: obj.fk_stage_key,
    stage_name: obj.stage_name,
  });
  newStanding.save((err) => {
    if (!err) {
      console.log("[+] Standing Added successfully");
    } else {
      console.log("[+] Error during insertion" + err);
    }
  });
};

const updateStanding = (obj) => {
  const query = { league_key: String(obj.league_key) };
  const replacement = obj;
  StandingsFootball.findOneAndReplace(
    query,
    replacement,
    null,
    function (err, doc) {
      if (err) {
        console.log("[+] Update Error", err);
      } else {
        console.log("Original Doc", doc);
      }
    }
  );
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

const storeResponse = (req) => {
  try {
    const result = req["result"];

    // push each object in the data arrray to DB
    result.total.map((obj) => {
      StandingsFootball.findOne(
        { league_key: obj.league_key },
        function (err, doc) {
          if (err) {
            console.log("[+] Find Error", err);
          } else {
            // if doc is null create doc if not null update doc
            doc === null ? addStanding(obj) : updateStanding(obj);
          }
        }
      );
    });
  } catch (err) {
    console.log(`[+] Error: ${err.message || err.toString()}`);
  }
};

const leaguesList = getFootballLeaguesList();
//

connectToMongo()
  .then(() => {
    leaguesList
      .then((res) =>
        res.result.map((obj) => {
          const standings = getStandings(obj.league_key);
          standings
            .then((res) => {
              storeResponse(res);
            })
            .catch((err) => console.log(err));
        })
      )
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
