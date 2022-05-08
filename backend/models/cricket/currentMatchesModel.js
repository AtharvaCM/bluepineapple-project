/*
Created: 27th, April, 2022
Updated: 27th, April, 2022
Synopsis: MongoDB Model for Cricket CurrentMatches collection
Exports: CurrentMatches model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cricketCurrentMatchesTable = new Schema(
  {
    data: { type: Array },
    status: { type: String },
  },
  { timeStamps: true }
);

const CurrentMatches = mongoose.model(
  "CurrentMatches",
  cricketCurrentMatchesTable,
  "cricketCurrentMatches"
);

module.exports = CurrentMatches;
