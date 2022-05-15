/*
Created: 10th, May, 2022
Synopsis: Contains controller functions related to Football routes.
Exports: getCurrentFootballMatches
*/

const CurrentMatchesFootball = require("../models/football/currentMatchesModel");
const LeagueModel = require("../models/football/leagueModel");
const NewsArticles = require("../models/newsArticleModel");
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

const getFootballLeaguesList = async (req, res) => {
  console.log("[+] Getting FootballLeaguesList");
  console.log(req.originalUrl);
  try {
    const leagues = await LeagueModel.find();
    const response = {
      status: "OK",
      leagues: leagues,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getFootballNews = async (req, res) => {
  console.log("[+] Getting FootballLeaguesList");
  console.log(req.originalUrl);
  try {
    const articles = await NewsArticles.find();
    const response = {
      status: "OK",
      articles: articles,
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
    const league_key = req.params.leagueKey;
    const query = { league_key: league_key, event_status: "Finished" };
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
    const league_key = req.params.leagueKey;
    const query = { league_key: league_key };
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

module.exports = {
  getCurrentFootballMatches,
  getFootballLeaguesList,
  getFootballNews,
  getFootballFinishedMatches,
  getAllFootballMatches,
};
