/*
Created: 14th, May, 2022
Synopsis: MongoDB Model for Football Standings collection
Exports: StandingsFootball model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footballStandingsTable = new Schema(
  {
    standing_place: { type: String },
    standing_place_type: { type: String },
    standing_team: { type: String },
    standing_P: { type: String },
    standing_W: { type: String },
    standing_D: { type: String },
    standing_L: { type: String },
    standing_F: { type: String },
    standing_A: { type: String },
    standing_GD: { type: String },
    standing_PTS: { type: String },
    team_key: { type: String },
    league_key: { type: String },
    league_season: { type: String },
    league_round: { type: String },
    standing_updated: { type: String },
    fk_stage_key: { type: String },
    stage_name: { type: String },
  },
  { timeStamps: true }
);

const StandingsFootball = mongoose.model(
  "StandingsFootball",
  footballStandingsTable,
  "footballStandings"
);

module.exports = StandingsFootball;
