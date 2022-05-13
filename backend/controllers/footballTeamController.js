/*
Created: 5th, May, 2022
Synopsis: Contains controller functions related to football team routes.
Exports: 
*/

const TeamFootball = require("../models/football/teamModel");
const MatchFootball = require("../models/football/matchModel");

const getFootballTeamsList = async (req, res) => {
  console.log("[+] Getting Football TeamsList");
  console.log(req.originalUrl);
  // call DB
  try {
    const teams = await TeamFootball.find();
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
