/*
Created: 20th, April, 2022
Updated: 3rd, May, 2022
Author: AtharvaCM
Synopsis: Contains controller functions related to cricket routes.
Exports: getCricketTeams, getCricketTeamDetails, getCurrentCricketMatches, getCricketNews
*/
const express = require("express");
const Team = require("../models/cricket/teamModel");
const CurrentMatches = require("../models/cricket/currentMatchesModel");
const newsArticles = require("../models/cricket/newsArticleModel");
const Series = require("../models/cricket/seriesModel");

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
    res.json(team);
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

module.exports = {
  getCricketTeamsList,
  getCricketTeamDetails,
  getCurrentCricketMatches,
  getCricketSeriesList,
  getCricketNews,
};
