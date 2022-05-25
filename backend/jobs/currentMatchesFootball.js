/*
Created: 10th, May, 2022
Synopsis: Job which gets Football Current Matches data from the API provider
Exports: 
*/
console.log("[+] Fetching Current Matches info from https://allsportsapi.com");

const connectToMongo = require("../dbConfig");
connectToMongo();
const CurrentMatchesFootball = require("../models/football/currentMatchesModel");

fetch = require("node-fetch");

const getResponse = async () => {
  try {
    const allSportsAPIKey = process.env.ALL_SPORTS_API_KEY;
    const url = `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${allSportsAPIKey}`;
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

const storeResponse = async (req) => {
  try {
    const result = req["result"] === undefined ? [] : req["result"];
    const success = req["success"];
    console.log("[+] result", result);
    console.log("[+] success", success);

    const query = {};
    const replacement = {
      data: result,
      success: success,
    };
    // This function has 4 parameters i.e. filter, replacement, options, callback
    CurrentMatchesFootball.findOneAndReplace(
      query,
      replacement,
      null,
      function (err, doc) {
        if (err) {
          console.log(err);
        } else {
          console.log("[+] Original doc: ", doc);
          // exit the job process and signal parent
          process.exit(0);
        }
      }
    );
  } catch (err) {
    console.log(`[+] error: ${err.message || err.toString()}`);
  }
};

const matchesList = getResponse();
matchesList
  .then((res) => {
    // Once the promise is resolved, store in DB
    storeResponse(res);
  })
  .catch((err) => console.log(err));
