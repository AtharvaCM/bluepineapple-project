/*
Created: 15th, April, 2022
Updated: 27th, April, 2022
Author: AtharvaCM
Synopsis: Configuration file for MongoDB connection string
Exports: connectToMongo()
*/

const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const handleError = (error) => {
  console.log(`[+] Coudn't connect to MongoDB, ${error}`);
};

const logError = (err) => {
  console.log(`[+] Error occurred: ${err}`);
};

const connectToMongo = async () => {
  try {
    console.log("[+] Attempting to connect to MongoDB Atlas");
    mongoose.connect(mongoURI, options, () => {
      console.log("[+] Connected to MongoDB Atlas successfully");
    });
  } catch (error) {
    handleError(error);
  }
};

mongoose.connection.on("open", (ref) => {
  console.log("[+] Connnection opened");
});

mongoose.connection.on("error", (err) => {
  logError(err);
});

module.exports = connectToMongo;
