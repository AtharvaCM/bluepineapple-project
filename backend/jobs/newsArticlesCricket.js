/*
Created: 2nd, May, 2022
Updated: 2nd, May, 2022
Author: AtharvaCM
Synopsis: Job which gets News articles data from the API provider
Exports: 
*/
console.log("[+] Fetching Cricket News Artiles from https://newsapi.org");

const connectToMongo = require("../dbConfig");
connectToMongo();
const NewsArticle = require("../models/cricket/newsArticleModel");

fetch = require("node-fetch");

const getResponse = async () => {
  try {
    const newsAPIKey = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/everything?apiKey=${newsAPIKey}&q=cricket`;
    const response = await fetch(url, {
      method: "GET",
      headers: {},
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(`{ error: ${err.message || err.toString()} }`);
  }
};

const addArticle = (obj) => {
  let newArticle = new NewsArticle({
    source: obj.source,
    author: obj.author,
    title: obj.title,
    description: obj.description,
    url: obj.url,
    urlToImage: obj.urlToImage,
    publishedAt: obj.publishedAt,
    content: obj.content,
  });
  newArticle.save((err) => {
    if (!err) {
      console.log("[+] Article Added successfully");
    } else {
      console.log("[+] Error during insertion" + err);
    }
  });
};

const updateMatch = (obj) => {
  const query = { title: String(obj.title) };
  const replacement = obj;
  NewsArticle.findOneAndReplace(query, replacement, null, function (err, doc) {
    if (err) {
      console.log("[+] Update Error", err);
    } else {
      console.log("Original Doc", doc);
    }
  });
  s;
};

const storeResponse = (req) => {
  try {
    const articles = req["articles"];
    const status = req["status"];
    console.log("[+] status", status);

    // push each object in the articles arrray to DB
    articles.map((obj) => {
      NewsArticle.findOne({ id: obj.id }, function (err, doc) {
        if (err) {
          console.log("[+] Find Error", err);
        } else {
          // if doc is null create doc if not null update doc
          doc === null ? addArticle(obj) : updateArticle(obj);
        }
      });
    });
  } catch (err) {
    console.log(`[+] Error: ${err.message || err.toString()}`);
    process.exit(1);
  }
};

const newsArticlesList = getResponse();

connectToMongo()
  .then(() => {
    newsArticlesList
      .then((res) => storeResponse(res))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
