import React from "react";

const BtnStatusCollected = (props) => {
  return (
    <div className="going-button">
      <button
        className="going-post-food-btn"
        onClick={() => props.statusCollected()}
      >
        Collected
      </button>
    </div>
  );
};

export default BtnStatusCollected;
