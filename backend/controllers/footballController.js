/*
Created: 10th, May, 2022
Synopsis: Contains controller functions related to Football routes.
Exports: getCurrentFootballMatches
*/

const LeagueModel = require("../models/football/leagueModel");
const NewsArticlesFootball = require("../models/football/newsFootballModel");
const GalleryFootball = require("../models/football/galleryModel");
const StandingsFootball = require("../models/football/standingsModel");

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
    const articles = await NewsArticlesFootball.find();
    const response = {
      status: "OK",
      articles: articles,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getFootballGalleryList = async (req, res) => {
  console.log("[+] Getting FootballGalleryList");
  console.log(req.originalUrl);
  try {
    const galleryList = await GalleryFootball.find();
    const response = {
      status: "OK",
      galleryList: galleryList,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getFootballStandings = async (req, res) => {
  console.log("[+] Getting FootballStandings");
  console.log(req.originalUrl);
  try {
    const league_name = req.params.leagueKey;
    const query = { league_name: league_name };
    const standings = await StandingsFootball.find(query);
    const response = {
      status: "OK",
      standings: standings,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

module.exports = {
  getFootballLeaguesList,
  getFootballNews,
  getFootballGalleryList,
  getFootballStandings,
};
