/*
Created: 13th, May, 2022
Synopsis: MongoDB Model for Football Players List collection
Exports: PlayerIndexFootball model
================
  UNUSED FILE
================
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footballPlayerIndexTable = new Schema(
  {
    player_key: { type: String },
    player_name: { type: String },
  },
  { timeStamps: true }
);

const PlayerIndexFootball = mongoose.model(
  "PlayerIndexFootball",
  footballPlayerIndexTable,
  "footballPlayersIndex"
);

module.exports = PlayerIndexFootball;
