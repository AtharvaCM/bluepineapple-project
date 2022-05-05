/*
Created: 5th, May, 2022
Updated: 5th, May, 2022
Author: AtharvaCM
Synopsis: Contains controller functions related to cricket team routes.
Exports: getCricketTeamsList, getCricketTeamDetails, getCricketTeamWinPercentageByYear
*/

const Team = require("../models/cricket/teamModel");

const getCricketTeamsList = async (req, res) => {
  // call DB
  try {
    const teams = await Team.find();
    const response = {
      status: "OK",
      teams: teams,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketTeamDetails = async (req, res) => {
  // call DB
  try {
    const teamID = req.params.id;
    console.log("teamID", teamID);
    const team = await Team.findOne({ id: teamID });
    const response = {
      status: "OK",
      team: team,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

// Team win perecentage by year (ODI, Test, T20)
const getCricketTeamWinPercentageByYear = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { id: id };
    const projection = {
      "stats.odi.win_percentage": 1,
      "stats.test.win_percentage": 1,
      "stats.t20.win_percentage": 1,
    };
    const stats = await Team.findOne(query, projection);
    const response = {
      status: "OK",
      stats: stats,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketTeamTotalMatchesStats = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { id: id };
    const projection = {
      "stats.odi.matches_played": 1,
      "stats.odi.matches_won": 1,
      "stats.odi.matches_drawn": 1,
      "stats.odi.matches_lost": 1,
      "stats.test.matches_played": 1,
      "stats.test.matches_won": 1,
      "stats.test.matches_drawn": 1,
      "stats.test.matches_lost": 1,
      "stats.t20.matches_played": 1,
      "stats.t20.matches_won": 1,
      "stats.t20.matches_drawn": 1,
      "stats.t20.matches_lost": 1,
    };
    const stats = await Team.findOne(query, projection);
    const response = {
      status: "OK",
      stats: stats,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

module.exports = {
  getCricketTeamsList,
  getCricketTeamDetails,
  getCricketTeamWinPercentageByYear,
  getCricketTeamTotalMatchesStats,
};
