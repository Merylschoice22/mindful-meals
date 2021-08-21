import React from "react";
import FoodCardMyReserved from "./FoodCardMyReserved";

const MyReservedSection = ({ postsData, setRefresh }) => {
  return (
    <div>
      {postsData.map((post) => {
        return (
          post.status === "reserved" && (
            <div className="___MYfoodcard" key={post.id}>
              <FoodCardMyReserved postData={post} setRefresh={setRefresh} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default MyReservedSection;
