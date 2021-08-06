const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const relativeDate = require("tiny-relative-date");
const { Pool } = require("pg");
const secret = require("./secret.json");
// const creator = require("./services/creator.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const pool = new Pool(secret);

//FoodFeed
//See all food posts - username, title, barrio, description
//See more details -
//In order of creation
//Where status is available
app.get("/", (req, res) => {});

//Food Post Form - Create a new food post
app.post("/new-post", (req, res) => {});

app.listen(3000, () => console.log("Server is up and running"));
