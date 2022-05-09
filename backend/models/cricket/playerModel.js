/*
Created: 3rrdd, May, 2022
Updated: 3rrdd, May, 2022
Author: AtharvaCM
Synopsis: MongoDB Model for Cricket Player collection
Exports: Player model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cricketPlayerTable = new Schema(
  {
    id: { type: String, required: true },
    team: { type: String },
    name: { type: String, required: true },
    description: { type: String },
    img_src: { type: String },
    date_of_birth: { type: String },
    age: { type: String },
    birth_place: { type: String },
    role: { type: String },
    batting: { type: Object },
    bowling: { type: Object },
    runs_in_last_5_years: { type: Object },
  },
  { timeStamps: true }
);

const Player = mongoose.model("Player", cricketPlayerTable, "cricketPlayers");

module.exports = Player;
