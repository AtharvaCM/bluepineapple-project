/*
Created: 15th, April, 2022
Synopsis: App's entry point, handles high level functions
Exports: 
*/

require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

var cors = require("cors");

// init bree
const bree = require("./bree");
bree.start();

const connectToMongo = require("./dbConfig");
connectToMongo();

const routerCricket = require("./routes/cricketRoutes");
const routerFootball = require("./routes/footballRoutes");

app.use(cors());
app.use("/api/v1/cricket", routerCricket);
app.use("/api/v1/football", routerFootball);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`[+] Sports Live app listening on port ${port}`);
  console.log(`[+] Open in browser http://127.0.0.1:${port}`);
});
