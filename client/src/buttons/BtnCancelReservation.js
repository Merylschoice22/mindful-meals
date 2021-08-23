import React from "react";
import "../components/food-cards/FoodCardMyReserved.css";

const BtnCancelReservation = ({ handleClick }) => {
  return (
    <div className="going-button">
      <button className="going-post-food-btn" onClick={handleClick}>
        Cancel Reservation
      </button>
    </div>
  );
};

export default BtnCancelReservation;
