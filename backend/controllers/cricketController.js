/*
Created: 20th, April, 2022
Updated: 4th, May, 2022
Author: AtharvaCM
Synopsis: Contains controller functions related to cricket routes.
Exports: getCricketTeamsList, getCricketTeamDetails, getCurrentCricketMatches, getCricketNews, 
  getCricketPlayersList, getCricketPlayerDetails, getCricketTeamWinPercentageByYear
*/
const express = require("express");
const Team = require("../models/cricket/teamModel");
const CurrentMatches = require("../models/cricket/currentMatchesModel");
const newsArticles = require("../models/newsArticleModel");
const Series = require("../models/cricket/seriesModel");
const Player = require("../models/cricket/playerModel");

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

const getCurrentCricketMatches = async (req, res) => {
  // return capped current matches
  try {
    const matches = await CurrentMatches.find();
    const response = {
      data: matches[0].data,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketNews = async (req, res) => {
  try {
    const articles = await newsArticles.find();
    const response = {
      status: "OK",
      articles: articles,
    };
    console.log("[+] getCricketNews Status = ", response.status);
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketSeriesList = async (req, res) => {
  try {
    const series = await Series.find();
    const response = {
      status: "Ok",
      series: series,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketPlayersList = async (req, res) => {
  try {
    const team = req.params.team;
    const query = team === null || team === undefined ? {} : { team: team };
    const players = await Player.find(query);
    const response = {
      status: "OK",
      data: players,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketPlayerDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { id: id };
    const player = await Player.find(query);
    const response = {
      status: "OK",
      data: player,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketPlayerRunsInLastFiveYears = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { id: id };
    const projection = { runs_in_past_5_years: 1 };
    const player = await Player.findOne(query, projection);
    console.log(player);
    const response = {
      status: "OK",
      data: player,
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
  } catch (err) {}
};

module.exports = {
  getCricketTeamsList,
  getCricketTeamDetails,
  getCurrentCricketMatches,
  getCricketSeriesList,
  getCricketNews,
  getCricketPlayersList,
  getCricketPlayerDetails,
  getCricketPlayerRunsInLastFiveYears,
  getCricketTeamWinPercentageByYear,
};
