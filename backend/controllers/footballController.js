/*
Created: 10th, May, 2022
Synopsis: Contains controller functions related to Football routes.
Exports: getCurrentFootballMatches
*/

const { response } = require("express");
const CurrentMatchesFootball = require("../models/football/currentMatchesModel");

const getCurrentFootballMatches = async (req, res) => {
  console.log("[+]", req.originalUrl);
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

module.exports = {
  getCurrentFootballMatches,
};
