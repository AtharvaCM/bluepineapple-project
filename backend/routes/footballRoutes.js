/*
Created: 10th, May, 2022
Synopsis: Contains routes related to Football and calls respective controller function of the routes. 
Exports: Express router object
*/

const express = require("express");
const router = express.Router();

const {
  getCurrentFootballMatches,
  getFootballFinishedMatches,
  getFootballLeaguesList,
  getFootballNews,
} = require("../controllers/footballController");

router.get("/currentMatches", getCurrentFootballMatches);
router.get("/finishedMatches", getFootballFinishedMatches);

router.get("/leaguesList", getFootballLeaguesList);

router.get("/news", getFootballNews);

const {
  getFootballTeamsList,
} = require("../controllers/footballTeamController");

router.get("/teamsList", getFootballTeamsList);

module.exports = router;
