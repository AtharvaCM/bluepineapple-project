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
  getCricketTeamSchedule,
} = require("../controllers/cricketTeamController");

const {
  getCricketPlayersList,
  getCricketPlayerDetails,
  getCricketPlayerRunsInLastFiveYears,
  getCricketPlayerBattingODIRankingsList,
  getCricketPlayerBattingTestRankingsList,
  getCricketPlayerBattingT20RankingsList,
  getCricketPlayerBowlingODIRankingsList,
  getCricketPlayerBowlingTestRankingsList,
  getCricketPlayerBowlingT20RankingsList,
} = require("../controllers/cricketPlayerController");

router.get("/currentMatches", getCurrentCricketMatches);

router.get("/teams", getCricketTeamsList);
router.get("/teams/:id", getCricketTeamDetails);
router.get("/teams/:name/schedule", getCricketTeamSchedule);

router.get("/players/", getCricketPlayersList);
router.get("/:team/players/", getCricketPlayersList);
router.get("/players/:id", getCricketPlayerDetails);
router.get(
  "/players/batting/ranking/odi",
  getCricketPlayerBattingODIRankingsList
);
router.get(
  "/players/batting/ranking/test",
  getCricketPlayerBattingTestRankingsList
);
router.get(
  "/players/batting/ranking/t20",
  getCricketPlayerBattingT20RankingsList
);
router.get(
  "/players/bowling/ranking/odi",
  getCricketPlayerBowlingODIRankingsList
);
router.get(
  "/players/bowling/ranking/test",
  getCricketPlayerBowlingTestRankingsList
);
router.get(
  "/players/bowling/ranking/t20",
  getCricketPlayerBowlingT20RankingsList
);

// for graph purposes
router.get("/stats/players/:id/", getCricketPlayerRunsInLastFiveYears);
router.get(
  "/stats/team/winPercentageByYear/:id",
  getCricketTeamWinPercentageByYear
);
router.get("/stats/team/totalMatches/:id", getCricketTeamTotalMatchesStats);

router.get("/seriesList", getCricketSeriesList);

router.get("/news", getCricketNews);

module.exports = router;
