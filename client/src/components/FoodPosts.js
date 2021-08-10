import React from "react";
import { useState } from "react";
// import ReservedPopup from "./ReservedPopup";
import "./FoodPostCard.css";
import "./ReservedPopup.css";
import LoadingButton from "./LoadingButton";

const FoodPosts = () => {
  return (
    <div>
      <div>
        <FoodCard />
      </div>
      <LoadingButton />
    </div>
  );
};

export default FoodPosts;
