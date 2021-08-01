import React from "react";
import CreateFoodPost from "../components/CreateFoodPost.js";
import ExtraFoodCardOne from "./ExtraFoodCardOne.js";

const FoodFeed = () => {
  return (
    <div className="food-feed">
      <h1>Mindful Meals</h1>
      <CreateFoodPost />
      <ExtraFoodCardOne />
      {/* Component - FoodPostCard - mapped? */}
      {/* Component - LoadMore button */}
    </div>
  );
};

export default FoodFeed;
