/*
Created: 15th, April, 2022
Updated: 20th, April, 2022
Author: AtharvaCM
Synopsis: App's entry point, handles high level functions
Exports: 
*/

require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

var cors = require("cors");

// init bree
const bree = require("./bree");
bree.start();

const connectToMongo = require("./dbConfig");
connectToMongo();

const routerCricket = require("./routes/cricketRoutes");

app.use("/api/v1/cricket", routerCricket);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`[+] Sports Live app listening on port ${port}`);
  console.log(`[+] Open in browser http://127.0.0.1:${port}`);
});
