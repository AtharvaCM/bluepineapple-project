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
    id: { type: String, required: true },
    name: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    odi: { type: Number },
    t20: { type: Number },
    test: { type: Number },
    sqauds: { type: Number },
    matches: { type: Number },
  },
  { timeStamps: true }
);

const Series = mongoose.model("Series", cricketSeriesTable, "cricketSeries");

module.exports = Series;
