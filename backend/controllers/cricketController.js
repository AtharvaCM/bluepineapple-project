/*
Created: 20th, April, 2022
Updated: 5th, May, 2022
Author: AtharvaCM
Synopsis: Contains controller functions related to cricket routes.
Exports: getCricketTeamsList, getCricketTeamDetails, getCurrentCricketMatches, getCricketNews, 
  getCricketPlayersList, getCricketPlayerDetails, getCricketTeamWinPercentageByYear,
  getCricketTeamTotalMatchesStats, getCricketPlayerBattingODIRankingsList
*/

const CurrentMatches = require("../models/cricket/currentMatchesModel");
const newsArticles = require("../models/newsArticleModel");
const Series = require("../models/cricket/seriesModel");

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
  getCurrentCricketMatches,
  getCricketSeriesList,
  getCricketNews,
};
