/*
Created: 20th, April, 2022
Updated: 20th, April, 2022
Author: AtharvaCM
Synopsis: Contains routes related to cricket and calls respective controller function of the routes. 
Exports: Express router object
*/

const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

const {
  getCricketTeamsList,
  getCricketTeamDetails,
  getCurrentCricketMatches,
  getCricketNews,
  getCricketSeriesList,
} = require("../controllers/cricketController");

router.get("/currentMatches", getCurrentCricketMatches);

router.get("/teams", getCricketTeamsList);
router.get("/teams/:id", getCricketTeamDetails);

router.get("/seriesList", getCricketSeriesList);

router.get("/news", getCricketNews);

module.exports = router;
