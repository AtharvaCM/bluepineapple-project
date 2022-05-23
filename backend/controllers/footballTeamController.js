/*
Created: 5th, May, 2022
Synopsis: Contains controller functions related to football team routes.
Exports: 
*/

const MatchFootball = require("../models/football/matchModel");
const TeamRankingModel = require("../models/football/teamRankingModel");
const TeamFootball = require("../models/football/teamModel");

const getFootballTeamsList = async (req, res) => {
  console.log("[+] Getting Football TeamsList");
  console.log(req.originalUrl);
  // call DB
  try {
    const league_key = req.params.leagueKey;
    console.log("league_key", league_key);
    const query = { league_key: league_key };
    const projection = {
      home_team_key: 1,
      event_home_team: 1,
      away_team_key: 1,
      event_away_team: 1,
    };
    const matches = await MatchFootball.find(query);

    const key = "home_team_key";
    const teamKeys = [
      ...new Map(
        matches.map((item) => [item[key], item.home_team_key])
      ).values(),
    ];
    console.log("teamKeys", teamKeys);

    const teamsPromises = teamKeys.map(async (teamKey) => {
      try {
        const query = { team_key: teamKey };
        const team = await TeamFootball.findOne(query);
        // teams.push(team);
        return team;
      } catch (err) {
        throw err;
      }
    });

    Promise.all(teamsPromises)
      .then((result) => {
        const response = {
          status: "OK",
          teams: result,
        };
        res.json(response);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getFootballTeam = async (teamKey) => {
  console.log("[+] Getting FootballTeam");
  try {
    const query = { team_key: teamKey };
    const team = await TeamFootball.findOne(query);
    res.json(team);
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
