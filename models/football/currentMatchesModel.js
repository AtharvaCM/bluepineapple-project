/*
Created: 27th, April, 2022
Synopsis: MongoDB Model for Football CurrentMatches collection
Exports: CurrentMatchesFootball model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footballCurrentMatchesTable = new Schema(
  {
    data: { type: Array },
    status: { type: String },
  },
  { timeStamps: true }
);

const CurrentMatchesFootball = mongoose.model(
  "CurrentMatchesFootball",
  footballCurrentMatchesTable,
  "footballCurrentMatches"
);

module.exports = CurrentMatchesFootball;
