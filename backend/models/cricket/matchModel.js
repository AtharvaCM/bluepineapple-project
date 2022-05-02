/*
Created: 28th, April, 2022
Updated: 28th, April, 2022
Author: AtharvaCM
Synopsis: MongoDB Model for Cricket Match collection
Exports: Match model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cricketMatchTable = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    matchType: { type: String, required: true },
    status: { type: String, required: true },
    venue: { type: String },
    date: { type: String },
    dateTimeGMT: { type: String },
    teams: { type: Array },
    series_id: { type: String },
    fantasyEnabled: { type: Boolean },
    hasSquad: { type: Boolean },
  },
  { timeStamps: true }
);

const Match = mongoose.model("Match", cricketMatchTable, "cricketMatches");

module.exports = Match;
