import React from "react";
import FoodCardMyReserved from "./FoodCardMyReserved";

const MyReservedSection = ({ postsData }) => {
  return (
    <div>
      {postsData.map((post) => {
        return (
          post.status === "reserved" && (
            <div className="___MYfoodcard" key={post.id}>
              <FoodCardMyReserved postData={post} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default MyReservedSection;
