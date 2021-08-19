import React from "react";

const BtnStatusCollected = ({ handleClick }) => {
  return (
    <div className="going-button">
      <button className="going-post-food-btn" onClick={handleClick}>
        Collected
      </button>
    </div>
  );
};

export default BtnStatusCollected;
