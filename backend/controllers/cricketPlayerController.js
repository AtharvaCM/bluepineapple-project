/*
Created: 5th, May, 2022
Synopsis: Contains controller functions related to cricket player routes.
Exports: getCricketPlayersList, getCricketPlayerDetails, getCricketPlayerRunsInLastFiveYears, 
  getCricketPlayerBattingODIRankingsList, getCricketPlayerBattingTestRankingsList, 
  getCricketPlayerBattingT20RankingsList
*/

const Player = require("../models/cricket/playerModel");

const getCricketPlayersList = async (req, res) => {
  try {
    const team = req.params.team;
    console.log("[+] Getting CricketPlayersList for team = ", team);
    console.log(req.originalUrl);
    const query = team === null || team === undefined ? {} : { team: team };
    const players = await Player.find(query);
    const response = {
      status: "OK",
      data: players,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketPlayerDetails = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("[+] Getting Details For Cricket Player = ", id);
    console.log(req.originalUrl);
    const query = { id: id };
    const player = await Player.find(query);
    const response = {
      status: "OK",
      data: player,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketPlayerRunsInLastFiveYears = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("[+] Getting RunsInLastFiveYears For Cricket Player = ", id);
    console.log(req.originalUrl);
    const query = { id: id };
    const projection = { runs_in_past_5_years: 1 };
    const player = await Player.findOne(query, projection);
    console.log(player);
    const response = {
      status: "OK",
      data: player,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketPlayerBattingODIRankingsList = async (req, res) => {
  console.log("[+] Getting BattingODIRankingsList");
  console.log(req.originalUrl);
  try {
    const query = { "batting.odi.ranking": { $ne: "" } };
    const sortingQuery = { "batting.odi.Ranking": 1, _id: 1 };
    const projection = {
      id: 1,
      name: 1,
      description: 1,
      img_src: 1,
      date_of_birth: 1,
      age: 1,
      birth_place: 1,
      role: 1,
      "batting.odi.ranking": 1,
    };
    const collation = { locale: "en_US", numericOrdering: true };

    const rankingsList = await Player.find(query, projection)
      .sort(sortingQuery)
      .collation(collation);
    const response = {
      status: "OK",
      data: rankingsList,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketPlayerBattingTestRankingsList = async (req, res) => {
  console.log("[+] Getting BattingTestRankingsList");
  console.log(req.originalUrl);
  try {
    const query = { "batting.test.ranking": { $ne: "" } };
    const sortingQuery = { "batting.test.Ranking": 1, _id: 1 };
    const projection = {
      id: 1,
      name: 1,
      description: 1,
      img_src: 1,
      date_of_birth: 1,
      age: 1,
      birth_place: 1,
      role: 1,
      "batting.test.ranking": 1,
    };
    const collation = { locale: "en_US", numericOrdering: true };

    const rankingsList = await Player.find(query, projection)
      .sort(sortingQuery)
      .collation(collation);
    const response = {
      status: "OK",
      data: rankingsList,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketPlayerBattingT20RankingsList = async (req, res) => {
  console.log("[+] Getting BattingT20RankingsList");
  console.log(req.originalUrl);
  try {
    const query = { "batting.t20.ranking": { $ne: "" } };
    const sortingQuery = { "batting.t20.Ranking": 1, _id: 1 };
    const projection = {
      id: 1,
      name: 1,
      description: 1,
      img_src: 1,
      date_of_birth: 1,
      age: 1,
      birth_place: 1,
      role: 1,
      "batting.t20.ranking": 1,
    };
    const collation = { locale: "en_US", numericOrdering: true };

    const rankingsList = await Player.find(query, projection)
      .sort(sortingQuery)
      .collation(collation);
    const response = {
      status: "OK",
      data: rankingsList,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketPlayerBowlingODIRankingsList = async (req, res) => {
  console.log("[+] Getting BowlingODIRankingsList");
  console.log(req.originalUrl);
  try {
    const query = { "bowling.odi.ranking": { $ne: "" } };
    const sortingQuery = { "bowling.odi.Ranking": 1, _id: 1 };
    const projection = {
      id: 1,
      name: 1,
      description: 1,
      img_src: 1,
      date_of_birth: 1,
      age: 1,
      birth_place: 1,
      role: 1,
      "bowling.t20.ranking": 1,
    };
    const collation = { locale: "en_US", numericOrdering: true };

    const rankingsList = await Player.find(query, projection)
      .sort(sortingQuery)
      .collation(collation);
    const response = {
      status: "OK",
      data: rankingsList,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketPlayerBowlingTestRankingsList = async (req, res) => {
  console.log("[+] Getting BowlingTestRankingsList");
  console.log(req.originalUrl);
  try {
    const query = { "bowling.test.ranking": { $ne: "" } };
    const sortingQuery = { "bowling.test.Ranking": 1, _id: 1 };
    const projection = {
      id: 1,
      name: 1,
      description: 1,
      img_src: 1,
      date_of_birth: 1,
      age: 1,
      birth_place: 1,
      role: 1,
      "bowling.test.ranking": 1,
    };
    const collation = { locale: "en_US", numericOrdering: true };

    const rankingsList = await Player.find(query, projection)
      .sort(sortingQuery)
      .collation(collation);
    const response = {
      status: "OK",
      data: rankingsList,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCricketPlayerBowlingT20RankingsList = async (req, res) => {
  console.log("[+] Getting BowlingT20RankingsList");
  console.log(req.originalUrl);
  try {
    const query = { "bowling.t20.ranking": { $ne: "" } };
    const sortingQuery = { "bowling.t20.Ranking": 1, _id: 1 };
    const projection = {
      id: 1,
      name: 1,
      description: 1,
      img_src: 1,
      date_of_birth: 1,
      age: 1,
      birth_place: 1,
      role: 1,
      "bowling.t20.ranking": 1,
    };
    const collation = { locale: "en_US", numericOrdering: true };

    const rankingsList = await Player.find(query, projection)
      .sort(sortingQuery)
      .collation(collation);
    const response = {
      status: "OK",
      data: rankingsList,
    };
    res.json(response);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

module.exports = {
  getCricketPlayersList,
  getCricketPlayerDetails,
  getCricketPlayerRunsInLastFiveYears,
  getCricketPlayerBattingODIRankingsList,
  getCricketPlayerBattingTestRankingsList,
  getCricketPlayerBattingT20RankingsList,
  getCricketPlayerBowlingODIRankingsList,
  getCricketPlayerBowlingTestRankingsList,
  getCricketPlayerBowlingT20RankingsList,
};
