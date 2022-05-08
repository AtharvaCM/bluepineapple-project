/*
Created: 28th, April, 2022
Updated: 28th, April, 2022
Synopsis: Job which gets Matches List data from the API provider
Exports: 
*/
console.log("[+] Fetching Current Matches info from https://CricketData.org");

const connectToMongo = require("../dbConfig");
const fetch = require("node-fetch");

const Match = require("../models/cricket/matchModel");

const getResponse = async () => {
  try {
    const cricAPIKey = process.env.CRIC_API_KEY;
    const url = `https://api.cricapi.com/v1/matches?apikey=${cricAPIKey}&offset=0`;
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
  let newMatch = new Match({
    id: obj.id,
    name: obj.name,
    matchType: obj.matchType,
    status: obj.status,
    venue: obj.venue,
    date: obj.date,
    dateTimeGMT: obj.dateTimeGMT,
    teams: obj.teams,
    series_id: obj.series_id,
    fantasyEnabled: obj.fantasyEnabled,
    hasSquad: obj.hasSquad,
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
  const query = { id: String(obj.id) };
  const replacement = obj;
  Match.findOneAndReplace(query, replacement, null, function (err, doc) {
    if (err) {
      console.log("[+] Update Error", err);
    } else {
      console.log("Original Doc", doc);
    }
  });
  s;
};

const storeResponse = (req) => {
  try {
    const data = req["data"];
    const status = req["status"];
    // console.log("[+] data", data);
    console.log("[+] status", status);

    // push each object in the data arrray to DB
    data.map((obj) => {
      Match.findOne({ id: obj.id }, function (err, doc) {
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
    process.exit(1);
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
