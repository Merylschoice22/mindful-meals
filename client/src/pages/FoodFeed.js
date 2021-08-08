import React from "react";
import Navbar from "../components/navbar-links/Navbar";
import FoodPostCard from "../components/FoodPostCard";
import CreateFoodPost from "../components/CreateFoodPost";
import ExtraFoodCardOne from "./ExtraFoodCardOne";
import ExtraFoodCardTwo from "./ExtraFoodCardTwo";
import LoadingButton from "../components/LoadingButton";

const FoodFeed = () => {
  return (
    <div className="food-feed">
      <h1>Welcome to Mindful Meals</h1>
      <Navbar />
      {/* Popup Input Component */}
      <CreateFoodPost />
      {/* User Food Cards */}
      <FoodPostCard />
      <ExtraFoodCardOne />
      <ExtraFoodCardTwo />
      {/* Loading Button */}
      <LoadingButton />
    </div>
  );
};

export default FoodFeed;
