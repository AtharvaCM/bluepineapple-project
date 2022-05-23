/*
Created: 16th, May, 2022
Synopsis: Contains controller functions related to Football Match routes.
Exports: getCurrentFootballMatches, 
*/

const CurrentMatchesFootball = require("../models/football/currentMatchesModel");
const MatchFootball = require("../models/football/matchModel");

const getCurrentFootballMatches = async (req, res) => {
  console.log("[+] Getting CurrentFootballMatches");
  console.log(req.originalUrl);
  try {
    const query = {};
    const sortingQuery = { event_date: 1, _id: 1 };
    const matches = await CurrentMatchesFootball.find(query).sort(sortingQuery);
    const response = {
      data: matches,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getFootballFinishedMatches = async (req, res) => {
  console.log("[+] Getting FootballFinishedMatches");
  console.log(req.originalUrl);
  try {
    const query = { event_status: "Finished" };
    const sortingQuery = { event_date: 1, _id: 1 };
    const matches = await MatchFootball.find(query).sort(sortingQuery);
    const response = {
      status: "OK",
      matches: matches,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getAllFootballMatches = async (req, res) => {
  console.log("[+] Getting AllFootballMatches");
  console.log(req.originalUrl);
  try {
    const league_id = req.params.leagueKey;
    console.log(league_id);
    const query = {league_key: league_id };
    const sortingQuery = { event_date: 1, _id: 1 };
    const matches = await MatchFootball.find(query).sort(sortingQuery);
    const response = {
      status: "OK",
      matches: matches,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

// for match graphs
const getFootballMatchStatictics = async (req, res) => {
  console.log("[+] Getting FootballMatcheStats");
  console.log(req.originalUrl);
  try {
    const match_key = req.params.matchKey;
    const query = { event_key: match_key };
    const projection = {
      event_home_team: 1,
      event_away_team: 1,
      event_date: 1,
      statistics: 1,
      goalscorers: 1,
    };
    const sortingQuery = { event_date: 1, _id: 1 };
    const match = await MatchFootball.findOne(query, projection).sort(
      sortingQuery
    );
    const response = {
      status: "OK",
      match: match,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

module.exports = {
  getCurrentFootballMatches,
  getFootballFinishedMatches,
  getAllFootballMatches,
  getFootballMatchStatictics,
};
