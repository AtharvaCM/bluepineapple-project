/*
Created: 22nd, April, 2022
Updated: 22nd, April, 2022
Author: AtharvaCM
Synopsis: MongoDB Model for Cricket Series collection
Exports: Team model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cricketSeriesTable = new Schema(
  {
    data: { type: Object },
    status: { type: String },
  },
  { timeStamps: true }
);

const Series = mongoose.model("Series", cricketSeriesTable);

module.exports = Series;
