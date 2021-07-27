const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const foodPostsArray = require("./fakeFoodPosts") 

app.get("/", (req, res) => {
  res.send("Food Post");
});

app.post("/", (req, res) => {
  res.send("Food Post");
});


app.listen(3000, () => console.log("Server is up and running"));
