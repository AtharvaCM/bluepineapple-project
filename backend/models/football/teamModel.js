/*
Created: 11th, May, 2022
Synopsis: MongoDB Model for Football Teams collection
Exports: LeagueFootball model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footballTeamTable = new Schema(
  {
    team_key: { type: String },
    team_name: { type: String },
    team_logo: { type: String },
    players: { type: Array },
    coaches: { type: Array },
  },
  { timeStamps: true }
);

const TeamFootball = mongoose.model(
  "TeamFootball",
  footballTeamTable,
  "footballTeams"
);

module.exports = TeamFootball;
