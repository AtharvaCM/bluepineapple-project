/*
Created: 20th, April, 2022
Updated: 20th, April, 2022
Author: AtharvaCM
Synopsis: Contains controller functions related to cricket routes.
Exports: getCricketTeams, getCricketTeamDetails, getCurrentCricketMatches
*/
const express = require("express");
const Team = require("../models/cricket/teamModel");
const CurrentMatches = require("../models/cricket/currentMatchesModel");


const getCricketTeams = async (req, res) => {
  // call DB
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};


const getCricketTeamDetails = async (req, res) => {
  // call DB
  try {
    const teamID = req.params.id;
    console.log("teamID", teamID);
    const team = await Team.findOne({ id: teamID });
    res.json(team);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

const getCurrentCricketMatches = async (req, res) => {
  // return capped current matches
  try {
    const matches = await CurrentMatches.find();
    res.json(matches);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
};

module.exports = {
  getCricketTeams,
  getCricketTeamDetails,
  getCurrentCricketMatches,
};
