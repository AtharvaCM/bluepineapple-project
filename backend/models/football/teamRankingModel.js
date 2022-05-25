/*
Created: 16th, May, 2022
Synopsis: MongoDB Model for Football Teams Rankingcollection
Exports: TeamRanking model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footballTeamRankingTable = new Schema(
  {
    position: { type: Number },
    flag_img: { type: String },
    name: { type: String },
  },
  { timeStamps: true }
);

const TeamRankingFootball = mongoose.model(
  "TeamRankingFootball",
  footballTeamRankingTable,
  "footballTeamRanking"
);

module.exports = TeamRankingFootball;
