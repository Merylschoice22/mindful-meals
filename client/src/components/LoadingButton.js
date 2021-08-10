import React from "react";
import "./LoadingButton.css";

const LoadingButton = (props) => {
  return (
    <div className="load-posts">
      <button className="load-button" onClick={props.loadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadingButton;
