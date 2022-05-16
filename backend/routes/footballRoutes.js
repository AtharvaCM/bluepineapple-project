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
  getAllFootballMatches,
} = require("../controllers/footballController");

router.get("/currentMatches", getCurrentFootballMatches);
router.get("/finishedMatches", getFootballFinishedMatches);
router.get("/allMatches/:leagueKey", getAllFootballMatches);

router.get("/leaguesList", getFootballLeaguesList);

router.get("/news", getFootballNews);

const {
  getFootballTeamsList,
} = require("../controllers/footballTeamController");

router.get("/teamsList/:league_name", getFootballTeamsList);

module.exports = router;
