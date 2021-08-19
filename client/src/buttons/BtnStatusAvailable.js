import React from "react";

const BtnStatusAvailable = ({ handleClick }) => {
  return (
    <div className="going-button">
      <button className="going-post-food-btn" onClick={handleClick}>
        Make Available again
      </button>
    </div>
  );
};

export default BtnStatusAvailable;
