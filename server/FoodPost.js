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
app.get("/", (req, res) => {
  const query =
    "SELECT u.username, p.title, p.loc_barrio, p.description, p.post_date FROM posts p INNER JOIN users u ON p.users_id = u.id order by p.post_date asc limit 5";
  pool
    .query(query)
    .then((result) => {
      res.json(result.rows);
    })
    .catch((error) => console.error(error));
});

//Food Post Form - Create a new food post
app.post("/new-post", (req, res) => {
  /* BODY */
  // {
  //     "title": "",
  //     "loc_barrio": "",
  //     "loc_street": "",
  //     "phone": "",
  //     "description": ""
  // }
  const post = req.body;


  const query =;

  pool
    .query(query)
    .then((result) => res.json(result.rows[0]))
    .catch((error) => console.error(error));

  post.title;
  // creator.createPost("Food Post");
});

app.listen(3000, () => console.log("Server is up and running"));
