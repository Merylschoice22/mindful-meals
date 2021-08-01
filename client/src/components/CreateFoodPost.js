import React from "react";

function CreateFoodPost() {
  return (
    <div className="make-food-post-popup">
      <div className="make-food-post-first-section">
        <div className="first-section-input">
          <h3>Create Post</h3>
        </div>
        <br></br>
        <div className="second-section-input">
          <input type="text" placeholder="What food are you giving away?" />
        </div>
        <br></br>
        <hr />
      </div>
    </div>
  );
}

export default CreateFoodPost;
