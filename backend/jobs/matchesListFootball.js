/*
Created: 11th, May, 2022
Synopsis: Job which gets Football Matches List data from the API provider
Exports: 
*/
console.log(
  "[+] Fetching Football Fixtures Info from https://allsportsapi.com"
);

const connectToMongo = require("../dbConfig");
const fetch = require("node-fetch");

const dateTime = require("node-datetime");
const currentDate = dateTime.create();
const dt = new Date();
dt.setDate(dt.getDate() + 15);
const nextDate = dateTime.create(dt);

const MatchFootball = require("../models/football/matchModel");

const getResponse = async () => {
  try {
    const allSportsAPIKey = process.env.ALL_SPORTS_API_KEY;
    const from = currentDate.format("Y-m-d");
    const to = nextDate.format("Y-m-d");
    console.log("from", from);
    console.log("to", to);
    const url = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${allSportsAPIKey}&from=${from}&to=${to}`;
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

const addMatch = (obj) => {
  let newMatch = new MatchFootball({
    event_key: obj.event_key,
    event_date: obj.event_date,
    event_time: obj.event_time,
    event_home_team: obj.event_home_team,
    home_team_key: obj.home_team_key,
    event_away_team: obj.event_away_team,
    away_team_key: obj.away_team_key,
    event_halftime_result: obj.event_halftime_result,
    event_final_result: obj.event_final_result,
    event_ft_result: obj.event_ft_result,
    event_penalty_result: obj.event_penalty_result,
    event_status: obj.event_status,
    country_name: obj.country_name,
    league_name: obj.league_name,
    league_key: obj.league_key,
    league_round: obj.league_round,
    league_season: obj.league_season,
    event_live: obj.event_live,
    event_stadium: obj.event_stadium,
    event_referee: obj.event_referee,
    home_team_logo: obj.home_team_logo,
    away_team_logo: obj.away_team_logo,
    evenet_country_key: obj.evenet_country_key,
    league_logo: obj.league_logo,
    country_logo: obj.country_logo,
    event_home_formation: obj.event_home_formation,
    event_away_formation: obj.event_away_formation,
    fk_stage_key: obj.fk_stage_key,
    stage_name: obj.stage_name,
    goalscorers: obj.goalscorers,
    substitutes: obj.substitutes,
    cards: obj.cards,
    lineups: obj.lineups,
    statistics: obj.statistics,
  });
  newMatch.save((err) => {
    if (!err) {
      console.log("[+] Match Added successfully");
    } else {
      console.log("[+] Error during insertion" + err);
    }
  });
};

const updateMatch = (obj) => {
  const query = { event_key: String(obj.event_key) };
  const replacement = obj;
  MatchFootball.findOneAndReplace(
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
};

const storeResponse = (req) => {
  try {
    const result = req["result"];
    const success = req["success"];
    // console.log("[+] data", data);
    console.log("[+] success", success);

    // push each object in the data arrray to DB
    result.map((obj) => {
      MatchFootball.findOne({ event_key: obj.event_key }, function (err, doc) {
        if (err) {
          console.log("[+] Find Error", err);
        } else {
          // if doc is null create doc if not null update doc
          doc === null ? addMatch(obj) : updateMatch(obj);
        }
      });
    });
  } catch (err) {
    console.log(`[+] Error: ${err.message || err.toString()}`);
  }
};

const matchesList = getResponse();

connectToMongo()
  .then(() => {
    matchesList
      .then((res) => storeResponse(res))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
