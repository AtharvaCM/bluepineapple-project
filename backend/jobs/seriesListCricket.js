/*
Created: 22nd, April, 2022
Updated: 27nd, April, 2022
Author: AtharvaCM
Synopsis: Job which gets Series List data from the API provider
Exports: 
*/
console.log("[+] Fetching Current Matches info from https://CricketData.org");

const connectToMongo = require("../dbConfig");
connectToMongo();

const Series = require("../models/cricket/seriesModel");

const fetch = require("node-fetch");

const getResponse = async () => {
  try {
    const cricAPIKey = process.env.CRIC_API_KEY;
    const url = `https://api.cricapi.com/v1/series?apikey=${cricAPIKey}&offset=0`;
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

const addSeries = (obj) => {
  let newSeries = new Series({
    id: obj.id,
    name: obj.name,
    startDate: obj.startDate,
    endDate: obj.endDate,
    odi: obj.odi,
    test: obj.test,
    t20: obj.t20,
    squads: obj.squads,
    matches: obj.matches,
  });
  newSeries.save((err) => {
    if (!err) {
      console.log("[+] Series Added successfully");
    } else {
      console.log("[+] Error during insertion" + err);
    }
  });
};

const updateSeries = (obj) => {
  const query = { id: String(obj.id) };
  const replacement = obj;
  Series.findOneAndReplace(query, replacement, null, function (err, doc) {
    if (err) {
      console.log("[+] Update Error", err);
    } else {
      console.log("Original Doc", doc);
    }
  });
};

const storeResponse = async (req) => {
  try {
    const data = req["data"];
    const status = req["status"];
    console.log("[+] status", status);
    console.log("[+] data", data);

    // push each object in the data arrray to DB
    data.map((obj) => {
      console.log(obj);
      // check if Id of the obj already exists in DB
      Series.findOne({ id: obj.id }, function (err, doc) {
        if (err) {
          console.log("[+] Find Error", err);
        } else {
          console.log("[+] Doc found", doc.id);
        }
      });
    });

    // exit the job process and signal parent
    process.exit(0);
  } catch (err) {
    console.log(`[+] error: ${err.message || err.toString()}`);
    process.exit(1);
  }
};

const seriesInfo = getResponse();
seriesInfo
  .then((res) => {
    // Once the promise is resolved, store in DB
    storeResponse(res);
  })
  .catch((err) => console.log(err));
