/*
Created: 15th, April, 2022
Updated: 15th, April, 2022
Author: AtharvaCM
Synopsis: App's entry point, handles high level functions
Exports: 
*/

require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

var cors = require("cors");

const connectToMongo = require("./dbConfig");
connectToMongo();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Sports Live app listening on port ${port}`);
});
