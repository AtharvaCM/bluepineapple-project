/*
Created: 2nd, May, 2022
Synopsis: MongoDB Model for News Article collection
Exports: News Article model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsArticleCricketTable = new Schema(
  {
    source: { type: Object, required: true },
    author: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    url: { type: String },
    urlToImage: { type: String },
    publishedAt: { type: String },
    content: { type: String },
  },
  { timeStamps: true }
);

const NewsArticleCricket = mongoose.model(
  "NewsArticleCricket",
  newsArticleCricketTable,
  "cricketNews"
);

module.exports = NewsArticleCricket;
