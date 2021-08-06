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

app.listen(3000, () => console.log("Server is up and running"));
