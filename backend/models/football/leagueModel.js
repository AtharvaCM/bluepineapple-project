/*
Created: 11th, May, 2022
Synopsis: MongoDB Model for Football Leagues collection
Exports: LeagueFootball model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footballLeagueTable = new Schema(
  {
    league_key: { type: String },
    league_name: { type: String },
    country_key: { type: String },
    country_name: { type: String },
    league_logo: { type: String },
    country_logo: { type: String },
  },
  { timeStamps: true }
);

const LeagueFootball = mongoose.model(
  "LeagueFootball",
  footballLeagueTable,
  "footballLeagues"
);

module.exports = LeagueFootball;
