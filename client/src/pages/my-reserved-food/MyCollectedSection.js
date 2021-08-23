import React from "react";
import FoodCardCollected from "../../components/food-cards/FoodCardCollected";
const MyCollectedSection = ({ postsData }) => {
  return (
    <div>
      {postsData.map(
        (post) =>
          post.status === "collected" && (
            <div className="___MYfoodcard" key={post.id}>
              <FoodCardCollected postData={post} />
            </div>
          )
      )}
    </div>
  );
};

export default MyCollectedSection;
