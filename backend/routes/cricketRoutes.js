/*
Created: 20th, April, 2022
Updated: 4th, May, 2022
Author: AtharvaCM
Synopsis: Contains routes related to cricket and calls respective controller function of the routes. 
Exports: Express router obect
*/

const express = require("express");
const router = express.Router();

const {
  getCricketTeamsList,
  getCricketTeamDetails,
  getCurrentCricketMatches,
  getCricketNews,
  getCricketSeriesList,
  getCricketPlayersList,
  getCricketPlayerDetails,
  getCricketPlayerRunsInLastFiveYears,
  getCricketTeamWinPercentageByYear,
} = require("../controllers/cricketController");

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
