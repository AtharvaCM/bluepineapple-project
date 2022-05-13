/*
Created: 10th, May, 2022
Synopsis: Contains controller functions related to Football routes.
Exports: getCurrentFootballMatches
*/

const CurrentMatchesFootball = require("../models/football/currentMatchesModel");
const LeagueModel = require("../models/football/leagueModel");
const NewsArticles = require("../models/newsArticleModel");

const getCurrentFootballMatches = async (req, res) => {
  console.log("[+] Getting CurrentFootballMatches");
  console.log(req.originalUrl);
  try {
    const matches = await CurrentMatchesFootball.find();
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

module.exports = {
  getCurrentFootballMatches,
  getFootballLeaguesList,
  getFootballNews,
};