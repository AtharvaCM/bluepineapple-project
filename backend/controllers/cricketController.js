/*
Created: 20th, April, 2022
Updated: 20th, April, 2022
Author: AtharvaCM
Synopsis: Contains controller functions related to cricket routes.
Exports: 
*/
const express = require("express");
const Team = require("../models/cricket/teamModel");


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


module.exports = {
  getCricketTeams,
  getCricketTeamDetails,
};
