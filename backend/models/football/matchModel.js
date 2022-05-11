/*
Created: 10th, May, 2022
Synopsis: MongoDB Model for Football Match collection
Exports: MatchFootball model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footballMatchTable = new Schema(
  {
    event_key: { type: String, required: true },
    event_date: { type: String, required: true },
    event_time: { type: String },
    event_home_team: { type: String, required: true },
    home_team_key: { type: String },
    event_away_team: { type: String, required: true },
    away_team_key: { type: String },
    event_halftime_result: { type: String },
    event_final_result: { type: String },
    event_ft_result: { type: String },
    event_penalty_result: { type: String },
    event_status: { type: String },
    country_name: { type: String },
    league_name: { type: String },
    league_key: { type: String },
    league_round: { type: String },
    league_season: { type: String },
    event_live: { type: String },
    event_stadium: { type: String },
    event_referee: { type: String },
    home_team_logo: { type: String },
    away_team_logo: { type: String },
    evenet_country_key: { type: String },
    league_logo: { type: String },
    country_logo: { type: String },
    event_home_formation: { type: String },
    event_away_formation: { type: String },
    fk_stage_key: { type: String },
    stage_name: { type: String },
    goalscorers: { type: Array },
    substitutes: { type: Array },
    cards: { type: Array },
    lineups: { type: Object },
    statistics: { type: Array },
  },
  { timeStamps: true }
);

const MatchFootball = mongoose.model(
  "MatchFootball",
  footballMatchTable,
  "footballMatches"
);

module.exports = MatchFootball;
