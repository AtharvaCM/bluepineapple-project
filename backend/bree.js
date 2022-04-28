/*
Created: 21th, April, 2022
Updated: 21th, April, 2022
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
      // interval: "30s",
    },
    {
      name: "seriesListCricket",
      cron: "0 12 * * *",
      // interval: "30s",
    },
  ],
  closeWorkerAfterMs: 60000,
});

// handle graceful reloads, pm2 support, and events like SIGHUP, SIGINT, etc.
const graceful = new Graceful({ brees: [bree] });
graceful.listen();

// start all jobs (this is the equivalent of reloading a crontab):
// bree.start();
module.exports = bree;
