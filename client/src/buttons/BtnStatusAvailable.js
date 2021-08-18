import React, { useState } from "react";

const BtnStatusAvailable = (props) => {
  return (
    <div className="going-button">
      <button
        className="going-post-food-btn"
        onClick={() => {
          props.statusAvailable();
        }}
      >
        Make Available again
      </button>
    </div>
  );
};

export default BtnStatusAvailable;
