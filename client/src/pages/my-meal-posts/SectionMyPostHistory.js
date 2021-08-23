import React from "react";
import FoodCardCollected from "../../components/food-cards/FoodCardCollected";

const SectionMyPostHistory = ({ postsData }) => {
  return (
    <div>
      {postsData.map((post) => {
        return (
          post.status === "collected" && (
            <div className="___MYfoodcard" key={post.id}>
              <FoodCardCollected postData={post} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default SectionMyPostHistory;
