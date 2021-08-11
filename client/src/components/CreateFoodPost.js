import React from "react";
import { useState } from "react";
import PopupInput from "./PopupInput";
import FoodPostForm from "./FoodPostForm";
import "./CreateFoodPost.css";

function CreateFoodPost() {
  
  return (
    <div className="make-food-post-popup">
      <div className="make-food-post-first-section">
        <div className="first-section-input">
          <h3>Create Post</h3>
        </div>
        <br></br>
        <div className="second-section-input">
          <input
            type="text"
            placeholder="What food are you giving away?"
            onClick={() => setInputPopup(true)}
          />
        </div>
        <br></br>
        
          <FoodPostForm />
        
        <hr />
      </div>
    </div>
  );
}

export default CreateFoodPost;
