import React from "react";
import Navbar from "../components/navbar-links/Navbar";
//import FoodPostCard from "../components/FoodPostCard";
import CreateFoodPost from "../components/CreateFoodPost";
import FoodPosts from "../components/FoodPosts";
//import ExtraFoodCardOne from "./ExtraFoodCardOne";
//import ExtraFoodCardTwo from "./ExtraFoodCardTwo";
//import LoadingButton from "../components/LoadingButton";
import "./FoodFeed.css";
import FoodCard from "../components/FoodCard";


const FoodFeed = () => {
  return (
    <div className="food-feed">
      <h1>Welcome to Mindful Meals</h1>
      <Navbar />
      {/* Popup Input Component */}
      <CreateFoodPost />
      {/* User Food Cards */}
      {/* <FoodCard  I think we wanna delete this /> */}
      
      {/* <FoodPostCard />
      <ExtraFoodCardOne />
      <ExtraFoodCardTwo />
      <LoadingButton /> */}
      <FoodPosts />
    </div>
  );
};

export default FoodFeed;
