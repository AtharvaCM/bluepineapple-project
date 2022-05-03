/*
Created: 20th, April, 2022
Updated: 20th, April, 2022
Author: AtharvaCM
Synopsis: Contains routes related to cricket and calls respective controller function of the routes. 
Exports: Express router object
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
} = require("../controllers/cricketController");

router.get("/currentMatches", getCurrentCricketMatches);

router.get("/teams", getCricketTeamsList);
router.get("/teams/:id", getCricketTeamDetails);

router.get("/players", getCricketPlayersList);
router.get("/players/:id", getCricketPlayerDetails);

router.get("/seriesList", getCricketSeriesList);

router.get("/news", getCricketNews);

module.exports = router;
