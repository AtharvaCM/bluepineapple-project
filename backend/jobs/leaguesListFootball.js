/*
Created: 28th, April, 2022
Synopsis: Job which gets Football Leagues List data from the API provider
Exports: 
*/
console.log("[+] Fetching Football Leagues Info from https://allsportsapi.com");

const connectToMongo = require("../dbConfig");
const fetch = require("node-fetch");

const LeagueFootball = require("../models/football/leagueModel");

const getResponse = async () => {
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

const addLeague = (obj) => {
  let newLeague = new LeagueFootball({
    league_key: obj.league_key,
    league_name: obj.league_name,
    country_key: obj.country_key,
    country_name: obj.country_name,
    league_logo: obj.league_logo,
    country_logo: obj.country_logo,
  });
  newLeague.save((err) => {
    if (!err) {
      console.log("[+] League Added successfully");
    } else {
      console.log("[+] Error during insertion" + err);
    }
  });
};

const updateLeague = (obj) => {
  const query = { league_key: String(obj.league_key) };
  const replacement = obj;
  LeagueFootball.findOneAndReplace(
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

const storeResponse = (req) => {
  try {
    const result = req["result"];
    const success = req["success"];
    // console.log("[+] data", data);
    console.log("[+] success", success);

    // push each object in the data arrray to DB
    result.map((obj) => {
      LeagueFootball.findOne(
        { league_key: obj.league_key },
        function (err, doc) {
          if (err) {
            console.log("[+] Find Error", err);
          } else {
            // if doc is null create doc if not null update doc
            doc === null ? addLeague(obj) : updateLeague(obj);
          }
        }
      );
    });
  } catch (err) {
    console.log(`[+] Error: ${err.message || err.toString()}`);
  }
};

const leaguesList = getResponse();

connectToMongo()
  .then(() => {
    leaguesList
      .then((res) => storeResponse(res))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
