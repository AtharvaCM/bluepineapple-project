/*
Created: 2nd, May, 2022
Updated: 2nd, May, 2022
Author: AtharvaCM
Synopsis: MongoDB Model for News Article collection
Exports: News Article model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsArticleTable = new Schema(
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

const NewsArticle = mongoose.model(
  "NewsArticle",
  newsArticleTable,
  "newsArticles"
);

module.exports = NewsArticle;
