/*
Created: 16th, May, 2022
Synopsis: MongoDB Model for Football Gallery.
Exports: FootballGallery model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footballGalleryTable = new Schema(
  {
    id: { type: Number },
    title: { type: String },
    img_url: { type: String },
  },
  { timeStamps: true }
);

const GalleryFootball = mongoose.model(
  "GalleryFootball",
  footballGalleryTable,
  "footballGallery"
);

module.exports = GalleryFootball;
