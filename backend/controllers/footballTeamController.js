/*
Created: 5th, May, 2022
Synopsis: Contains controller functions related to football team routes.
Exports: 
*/

const MatchFootball = require("../models/football/matchModel");
const TeamRankingModel = require("../models/football/teamRankingModel");

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

const getFootballTeamRankingsList = async (req, res) => {
  console.log("[+] Getting FootballTeamsRankingList");
  console.log(req.originalUrl);
  // call DB
  try {
    const query = {};
    const rankings = await TeamRankingModel.find(query);
    const response = {
      status: "OK",
      rankings: rankings,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

module.exports = {
  getFootballTeamsList,
  getFootballTeamRankingsList,
};
