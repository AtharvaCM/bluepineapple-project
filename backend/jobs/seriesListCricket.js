/*
Created: 22nd, April, 2022
Updated: 27nd, April, 2022
Author: AtharvaCM
Synopsis: Job which gets Series List data from the API provider
Exports: 
*/
console.log("[+] Fetching Current Matches info from https://CricketData.org");

const connectToMongo = require("../dbConfig");
const fetch = require("node-fetch");

const Series = require("../models/cricket/seriesModel");

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

const storeResponse = (req) => {
  try {
    const data = req["data"];
    const status = req["status"];
    // console.log("[+] data", data);
    console.log("[+] status", status);

    // push each object in the data arrray to DB
    data.map((obj) => {
      // check if Id of the obj already exists in DB
      Series.findOne({ id: obj.id }, function (err, doc) {
        if (err) {
          console.log("[+] Find Error", err);
        } else {
          // if doc is null create doc if not null update doc
          doc === null ? addSeries(obj) : updateSeries(obj);
        }
      });
    });
  } catch (err) {
    console.log(`[+] Error: ${err.message || err.toString()}`);
    process.exit(1);
  }
};

const seriesInfo = getResponse();

connectToMongo()
  .then(() => {
    seriesInfo
      .then((res) => {
        // Once the promise is resolved, store in DB
        storeResponse(res);

        // exit the job process and signal parent
        // process.exit(0);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
