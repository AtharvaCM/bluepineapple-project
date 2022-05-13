/*
Created: 10th, May, 2022
Synopsis: Contains routes related to Football and calls respective controller function of the routes. 
Exports: Express router object
*/

const express = require("express");
const router = express.Router();

const {
  getCurrentFootballMatches,
  getFootballLeaguesList,
  getFootballNews,
  getFootballMatches,
} = require("../controllers/footballController");

router.get("/currentMatches", getCurrentFootballMatches);
router.get("/fixtures", getFootballMatches);

router.get("/leaguesList", getFootballLeaguesList);

router.get("/news", getFootballNews);

module.exports = router;
