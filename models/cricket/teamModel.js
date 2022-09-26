/*
Created: 20th, April, 2022
Synopsis: MongoDB Model for Cricket Team collection
Exports: Team model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cricketTeamTable = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    flag: { type: String, required: true },
    continent: { type: String, required: true },
    stats: { type: Object },
    current_roster: { type: Array },
  },
  { timeStamps: true }
);

const Team = mongoose.model("Team", cricketTeamTable, "teams");

module.exports = Team;
