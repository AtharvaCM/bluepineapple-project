/*
Created: 22nd, April, 2022
Updated: 27nd, April, 2022
Author: AtharvaCM
Synopsis: Job which gets IPL series data from the API provider
Exports: 
*/
console.log("[+] Fetching IPL info from https://CricketData.org");

const connectToMongo = require("../dbConfig");
connectToMongo();
const Series = require("../models/cricket/seriesModel");

fetch = require("node-fetch");

const getResponse = async () => {
  try {
    const response = await fetch(
      "https://api.cricapi.com/v1/series_info?apikey=47361986-91d0-41e6-a62d-df3af877ed8c&offset=0&id=47b54677-34de-4378-9019-154e82b9cc1a",
      {
        method: "GET",
        headers: {},
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    // console.log("res", res);
    // await storeResponse(res);
    return res;
  } catch (err) {
    console.log(`{ error: ${err.message || err.toString()} }`);
  }
};

const storeResponse = async (req) => {
  try {
    const data = req["data"];
    const status = req["status"];
    console.log("[+] status", status);

    const query = { "data.info.id": "47b54677-34de-4378-9019-154e82b9cc1a" };
    const replacement = {
      data: data,
      status: status,
    };
    // This function has 4 parameters i.e. filter, replacement, options, callback
    Series.findOneAndReplace(query, replacement, null, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        console.log("[+] Original doc: ", docs);
      }
    });
  } catch (err) {
    console.log(`[+] error: ${err.message || err.toString()}`);
  }
};

const seriesInfo = getResponse();
seriesInfo
  .then((res) => {
    // Once the promise is resolved, store in DB
    storeResponse(res);
  })
  .catch((err) => console.log(err));
