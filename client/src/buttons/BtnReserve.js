import React from "react";
import "../components/ReservedPopup.css";

const BtnReserve = ({ handleClick }) => {
  return (
    <div>
      <button className="reserved-btn" onClick={handleClick}>
        Reserve
      </button>
    </div>
  );
};

export default BtnReserve;
