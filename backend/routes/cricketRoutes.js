/*
Created: 20th, April, 2022
Synopsis: Contains routes related to cricket and calls respective controller function of the routes. 
Exports: Express router obect
*/

const express = require("express");
const router = express.Router();

const {
  getCurrentCricketMatches,
  getCricketNews,
  getCricketSeriesList,
} = require("../controllers/cricketController");

const {
  getCricketTeamsList,
  getCricketTeamDetails,
  getCricketTeamWinPercentageByYear,
  getCricketTeamTotalMatchesStats,
} = require("../controllers/cricketTeamController");

const {
  getCricketPlayersList,
  getCricketPlayerDetails,
  getCricketPlayerRunsInLastFiveYears,
  getCricketPlayerBattingODIRankingsList,
} = require("../controllers/cricketPlayerController");

router.get("/currentMatches", getCurrentCricketMatches);

router.get("/teams", getCricketTeamsList);
router.get("/teams/:id", getCricketTeamDetails);

router.get("/players", getCricketPlayersList);
router.get("/players/:id", getCricketPlayerDetails);

// for graph purposes
router.get("/stats/players/:id/", getCricketPlayerRunsInLastFiveYears);
router.get(
  "/stats/team/winPercentageByYear/:id",
  getCricketTeamWinPercentageByYear
);

router.get("/seriesList", getCricketSeriesList);

router.get("/news", getCricketNews);

module.exports = router;
