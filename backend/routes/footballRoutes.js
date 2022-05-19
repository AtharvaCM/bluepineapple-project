/*
Created: 10th, May, 2022
Synopsis: Contains routes related to Football and calls respective controller function of the routes. 
Exports: Express router object
*/

const express = require("express");
const router = express.Router();

const {
  getFootballLeaguesList,
  getFootballNews,
  getFootballGalleryList,
  getFootballStandings,
} = require("../controllers/footballController");

router.get("/leaguesList", getFootballLeaguesList);
router.get("/standings/:leagueKey", getFootballStandings);

router.get("/news", getFootballNews);

router.get("/galleryList", getFootballGalleryList);

const {
  getCurrentFootballMatches,
  getFootballFinishedMatches,
  getAllFootballMatches,
  getFootballMatchStatictics,
} = require("../controllers/footballMatchController");

router.get("/currentMatches", getCurrentFootballMatches);
router.get("/finishedMatches", getFootballFinishedMatches);
router.get("/allMatches/:leagueName", getAllFootballMatches);
router.get("/stats/match/:matchKey", getFootballMatchStatictics);

const {
  getFootballTeamsList,
  getFootballTeamRankingsList,
} = require("../controllers/footballTeamController");

router.get("/teamsList/:leagueKey", getFootballTeamsList);
router.get("/teams/ranking", getFootballTeamRankingsList);

module.exports = router;
