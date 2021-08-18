import React from "react";
import ShareFoodPost from "../buttons/ShareFoodPost";
import "./FoodPostForm.css";

function FoodPostForm() {
  return (
    <div className="food-post-form">
      <div className="food-post-wrapper">
        <p className="p-header">Fill out the form below to share your food</p>
        <br></br>
        <form>
          <p className="post-label">Title</p>
          <input
            className="post-input"
            type="text"
            placeholder="Give your post a jazzy title. Ex: 'Delicious veggie salad for 2'"
          ></input>
          <br></br>
          <p className="post-label">Neighborhood</p>
          <input
            className="post-input"
            type="text"
            placeholder="What neighborhood is the food in? Ex: 'Gracia'"
          ></input>
          <br></br>
          <p className="post-label">Specific Street or Crossing</p>
          <input
            className="post-input"
            type="text"
            placeholder="Street / Cross streets / Any specific details. Ex: 'Arago con Bruc near the market'"
          ></input>
          <br></br>
          <p className="post-label">Phone</p>
          <input
            className="post-input"
            type="text"
            placeholder="Enter your phone number. Ex: 655 555 555"
          ></input>
          <br></br>
          <p className="post-label">Description</p>
          <input
            className="post-input"
            type="text"
            placeholder="Tell us about the food that you have. Ex: 'I made an extra large veggie salad and have enough to share for 2 people'"
          ></input>
          <br></br>
          <ShareFoodPost />
        </form>
      </div>
    </div>
  );
}

export default FoodPostForm;
