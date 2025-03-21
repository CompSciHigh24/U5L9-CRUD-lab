// Install EJS, Express, and MongoDB in Terminal

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.set("view engine", "ejs");

app.use(express.json());

const countrySchema = new mongoose.Schema({
  name: { type: String },
  flagURL: { type: String },
  population: { type: Number },
  officialLanguage: { type: String },
  hasNuclearWeapons: { type: Boolean },
});

const Country = mongoose.model("Country", countrySchema, "Countries");

// Create a POST route for "/add/country" that adds a country using the request body
// Use postman to add at least THREE different countries


// Create a GET route for "/" that renders countries.ejs with every country from mongoDB


// Go to countries.ejs and follow the tasks there


// Create a PATCH route handler for "/update/country" that modifies the population of any country you want
// Test this route on post man



// Create a DELETE route handler for "/delete/country" that deletes a country of your choice
// Test this route on post man


async function startServer() {
  
    // add your SRV string with a database called countries
  await mongoose.connect("...");

  app.listen(3000, () => {
    console.log("Server is running");
  });
}

startServer();
