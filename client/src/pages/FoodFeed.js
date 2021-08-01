import React from "react";
import CreateFoodPost from "../components/CreateFoodPost.js";
import ExtraFoodCardOne from "./ExtraFoodCardOne.js";
import ExtraFoodCardTwo from "./ExtraFoodCardTwo.js";

const FoodFeed = () => {
  return (
    <div className="food-feed">
      <h1>Mindful Meals</h1>
      <CreateFoodPost />
      <ExtraFoodCardOne />
      <ExtraFoodCardTwo />
      {/* Component - FoodPostCard - mapped? */}
      {/* Component - LoadMore button */}
    </div>
  );
};

export default FoodFeed;
