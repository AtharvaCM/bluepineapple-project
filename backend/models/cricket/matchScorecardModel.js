/*
Created: 8th, May, 2022
Synopsis: MongoDB Model for Cricket Match collection
Exports: MatchScorecard model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchScorecardTable = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    matchType: { type: String, required: true },
    status: { type: String, required: true },
    venue: { type: String },
    date: { type: String },
    dateTimeGMT: { type: String },
    teams: { type: Array },
    score: { type: Array },
    tossWinner: { type: String },
    tossChoice: { type: String },
    matchWinner: { type: String },
    series_id: { type: String },
    scorecard: { type: Array },
  },
  { timeStamps: true }
);

const MatchScorecard = mongoose.model(
  "MatchScorecard",
  matchScorecardTable,
  "cricketMatchScorecards"
);

module.exports = MatchScorecard;
