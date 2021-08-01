import React from "react";

function FoodPostForm() {
  return (
    <div className="food-post-form">
      <p>Fill out the form below to share your food</p>
      <br></br>
      <form>
        <p className="post-label">Title</p>
        <input
          className="post-input"
          type="text"
          placeholder="Give your post a jazzy title"
        ></input>
        <br></br>
        <p className="post-label">Location</p>
        <input
          className="post-input"
          type="text"
          placeholder="Where can we collect the food?"
        ></input>
        <br></br>
        <p className="post-label">Phone</p>
        <input
          className="post-input"
          type="text"
          placeholder="Enter your phone number"
        ></input>
        <br></br>
        <p className="post-label">Description</p>
        <input
          className="post-input"
          type="text"
          placeholder="Tell us about the food that you have"
        ></input>
        <br></br>
        <button
          className="share-btn"
          onClick={() => props.setTrigger(false)}
        ></button>
        {props.children}
      </form>
    </div>
  );
}

export default FoodPostForm;
