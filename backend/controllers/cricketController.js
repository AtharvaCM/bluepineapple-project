/*
Created: 20th, April, 2022
Synopsis: Contains controller functions related to cricket routes.
Exports: getCurrentCricketMatches, getCricketNews, getCricketSeriesList
*/

const CurrentMatches = require("../models/cricket/currentMatchesModel");
const newsArticles = require("../models/newsArticleModel");
const Series = require("../models/cricket/seriesModel");

const getCurrentCricketMatches = async (req, res) => {
  console.log("[+] Getting CurrentCricketMatches");
  console.log(req.originalUrl);
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
  console.log("[+] Getting CricketNews");
  console.log(req.originalUrl);
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
  console.log("[+] Getting CricketSeriesList");
  console.log(req.originalUrl);
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
