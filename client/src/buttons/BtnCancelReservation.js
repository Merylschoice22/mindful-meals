import React, { useState, useEffect } from "react";
import "../components/FoodCardMyReserved.css";

const BtnCancelReservation = ({ handleClick }) => {
  //   const statusAvailable = () => {
  //     setStatus("available");
  //   };
  const handleStatus = () => {
    handleClick("available");
  };
  useEffect(() => {
    fetch("http://localhost:3000/status-available/:postId", {
      method: "PATCH",
      body: JSON.stringify({
        completed: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        res.json();
      })
      .then(() => handleStatus)
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="going-button">
      <button
        className="going-post-food-btn"
        onClick={() => handleClick("available")}
      >
        Cancel Reservation
      </button>
    </div>
  );
};

export default BtnCancelReservation;
