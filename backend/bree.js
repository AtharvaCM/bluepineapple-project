/*
Created: 21th, April, 2022
Updated: 28th, April, 2022
Author: AtharvaCM
Synopsis: Bree initialization and setup
Exports: 
*/

const Bree = require("bree");
const Graceful = require("@ladjs/graceful");

const bree = new Bree({
  jobs: [
    // {
    //   name: "seriesInfoIPL",
    //   cron: "0 12 * * *",
    // },
    {
      name: "currentMatchesCricket",
      cron: "0 12 * * *",
    },
    {
      name: "seriesListCricket",
      cron: "0 12 * * *",
    },
    {
      name: "matchesListCricket",
      cron: "* * * * *",
    },
  ],
  closeWorkerAfterMs: 50000,
});

// handle graceful reloads, pm2 support, and events like SIGHUP, SIGINT, etc.
const graceful = new Graceful({ brees: [bree] });
graceful.listen();

module.exports = bree;
