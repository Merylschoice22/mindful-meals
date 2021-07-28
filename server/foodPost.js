const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const foodPostsArray = require("./fakeFoodPosts");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Food Post");
});

app.post("/", (req, res) => {
  res.send("Food Post");
});

//GET all the food posts
app.get("/feed", function (req, res) {
  //sort by time posted
  res.send(foodPostsArray);
});

//GET food post by id
app.get("/feed/:postId", function (req, res) {
  //get id from request path params
  const postId = req.params.postId;
  //get post with that id
  const post = foodPostsArray.find((post) => post.id == postId);
  //return post
  if (post) {
    res.send(post);
  } else {
    res.status(404).send();
  }
  res.send(post);
});

//POST - Create a new Food Post
app.post("/feed", function (req, res) {
  //get new post object from request
  const post = req.body;
  foodPostsArray.push(post);
  //add post object to array
  res.status(201).send(`Your post title has been successfully created`);
});

// DELETE - Change a post API server to allow updating a post according to the given ID.
app.delete("/feed/:id", (req, res) => {
  //Find the post that has the matching ID called in the URL. Identify the index
  const id = parseInt(req.params.id);
  const findPostIndexByID = foodPostsArray.findIndex((p) => p.id == id);
  console.log(findPostIndexByID);
  //Delete the post from the array by index
  foodPostsArray.splice(findPostIndexByID, 1);
  //Return the array without the post (console) and a success message
  console.log(foodPostsArray);
  res.status(200).send(`Your post ${id} has been successfully deleted`);
});

app.listen(3000, () => console.log("Server is up and running"));
