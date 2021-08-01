import React from "react";
import CreateFoodPost from "../components/CreateFoodPost.js";

const FoodFeed = () => {
  return (
    <div className="food-feed">
      <h1>Mindful Meals</h1>
      <CreateFoodPost />
      {/* Component - FoodPostCard - mapped? */}
      {/* Component - LoadMore button */}
    </div>
  );
};

export default FoodFeed;
