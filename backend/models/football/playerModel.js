/*
Created: 12th, May, 2022
Synopsis: MongoDB Model for Football Players collection
Exports: PlayerFootball model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footballPlayerTable = new Schema(
  {
    player_key: { type: String },
    player_name: { type: String },
    player_number: { type: String },
    player_country: { type: String },
    player_type: { type: String },
    player_age: { type: String },
    player_match_played: { type: String },
    player_goals: { type: String },
    player_yellow_cards: { type: String },
    player_red_cards: { type: String },
    player_minutes: { type: String },
    player_injured: { type: String },
    player_substitutte_out: { type: String },
    player_substitutes_on_bench: { type: String },
    player_assists: { type: String },
    player_is_captain: { type: String },
    player_shots_total: { type: String },
    player_goals_conceded: { type: String },
    player_fouls_commited: { type: String },
    player_tackles: { type: String },
    player_blocks: { type: String },
    player_crosses_total: { type: String },
    player_interceptions: { type: String },
    player_clearances: { type: String },
    player_dispossesed: { type: String },
    player_saves: { type: String },
    player_inside_box_saves: { type: String },
    player_duels_total: { type: String },
    player_duels_won: { type: String },
    player_dribble_attempts: { type: String },
    player_dribble_succ: { type: String },
    player_pen_comm: { type: String },
    player_pen_won: { type: String },
    player_pen_scored: { type: String },
    player_pen_missed: { type: String },
    player_passes: { type: String },
    player_passes_accuracy: { type: String },
    player_key_passes: { type: String },
    player_woordworks: { type: String },
    player_rating: { type: String },
    team_name: { type: String },
    team_key: { type: String },
    player_image: { type: String },
  },
  { timeStamps: true }
);

const PlayerFootball = mongoose.model(
  "PlayerFootball",
  footballPlayerTable,
  "footballPlayers"
);

module.exports = PlayerFootball;
