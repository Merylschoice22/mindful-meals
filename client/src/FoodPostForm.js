import React from "react";
import "./App.css";
//import { Link } from "react-router-dom";

function FoodPostForm() {
  return (
    <div className="food-post-form">
      <h3>Food Post Form</h3>
      <p>Fill out the form below to share your food</p>
      <form>
        <p className="post-label">Title</p>
        <input
          className="post-input"
          type="text"
          placeholder="Give your post a jazzy title"
        ></input>
        <p className="post-label">Location</p>
        <input
          className="post-input"
          type="text"
          placeholder="Where can we collect the food?"
        ></input>
        <p className="post-label">Phone</p>
        <input
          className="post-input"
          type="text"
          placeholder="Enter your phone number"
        ></input>
        <p className="post-label">Description</p>
        <input
          className="post-input"
          type="text"
          placeholder="Tell us about the food that you have"
        ></input>
        <button>Share</button>
      </form>
    </div>
  );
}

export default FoodPostForm;
