import React from "react";
import { useState } from "react";
import PopupInput from "./PopupInput";
import FoodPostForm from "./FoodPostForm";
import "./CreateFoodPost.css";

function CreateFoodPost() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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
            onClick={togglePopup}
          />
        </div>
        <br></br>
        {isOpen && (
          <PopupInput content={<FoodPostForm />} handleClose={togglePopup} />
        )}
        <hr />
      </div>
    </div>
  );
}

export default CreateFoodPost;
