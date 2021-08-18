import React from "react";

const BtnCancelReservation = (props) => {
  return (
    <div className="going-button">
      <button
        className="going-post-food-btn"
        onClick={() => props.statusAvailable()}
      >
        Cancel Reservation
      </button>
    </div>
  );
};

export default BtnCancelReservation;
