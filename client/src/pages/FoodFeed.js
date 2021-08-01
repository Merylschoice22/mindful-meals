import React from "react";
import CreateFoodPost from "../components/CreateFoodPost.js";
import ExtraFoodCardOne from "./ExtraFoodCardOne.js";
import ExtraFoodCardTwo from "./ExtraFoodCardTwo.js";
import Navbar from "../components/Navbar";
import FoodPostCard from "../components/FoodPostCard.js";

const FoodFeed = () => {
  return (
    <div className="food-feed">
      <h1>Mindful Meals</h1>
      <Navbar />
      {/* Popup Input Component */}
      <CreateFoodPost />
      {/* User Food Cards */}
      <FoodPostCard />
      <ExtraFoodCardOne />
      <ExtraFoodCardTwo />
      {/* Loading Button */}
    </div>
  );
};

export default FoodFeed;
