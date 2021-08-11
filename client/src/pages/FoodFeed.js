import React from "react";
import Navbar from "../components/navbar-links/Navbar";
// import FoodPostCard from "../components/FoodPostCard";
import CreateFoodPost from "../components/CreateFoodPost";
import FoodPosts from "../components/FoodPosts";
// import ExtraFoodCardOne from "./ExtraFoodCardOne";
// import ExtraFoodCardTwo from "./ExtraFoodCardTwo";
import "./FoodFeed.css";

const FoodFeed = () => {
  return (
    <div className="food-feed">
      <h1>Welcome to Mindful Meals</h1>
      <Navbar />
      {/* Popup Input Component */}
      <CreateFoodPost />
      {/* User Food Cards */}
      <FoodPosts />
      {/* <FoodPostCard />  
      <ExtraFoodCardOne />
      <ExtraFoodCardTwo /> */}
      {/* <LoadingButton /> */}
    </div>
  );
};

export default FoodFeed;
