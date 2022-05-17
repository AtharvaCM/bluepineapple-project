/*
Created: 5th, May, 2022
Synopsis: Contains controller functions related to football team routes.
Exports: 
*/

const TeamFootball = require("../models/football/teamModel");
const LeagueFootball = require("../models/football/leagueModel");
const MatchFootball = require("../models/football/matchModel");

const getFootballTeamsList = async (req, res) => {
  console.log("[+] Getting Football TeamsList");
  console.log(req.originalUrl);
  // call DB
  try {
    const league_name = req.params.league_name;
   const query = { league_name: league_name };
    const projection = { home_team_key: 1, away_team_key: 1 };
    const matches = await MatchFootball.find(query);
    const key = "home_team_key";
    const teams = [
      ...new Map(matches.map((item) => [item[key], item])).values(),
    ];
    const response = {
      status: "OK",
      teams: teams,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

module.exports = {
  getFootballTeamsList,
};
