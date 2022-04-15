/*
Created: 15th, April, 2022
Updated: 15th, April, 2022
Author: AtharvaCM
Synopsis: App's entry point, handles high level functions
Exports: 
*/

const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
