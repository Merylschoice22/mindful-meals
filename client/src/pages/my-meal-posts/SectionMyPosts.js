import React from "react";
import FoodCardMyMealPost from "../../components/FoodCardMyMealPost";

const SectionMyPosts = ({ postsData, setRefresh }) => {
  return (
    <div>
      {postsData.map((post) => {
        return (
          post.status === "reserved" && (
            <div className="___MYfoodcard" key={post.id}>
              <FoodCardMyMealPost postData={post} setRefresh={setRefresh} />
            </div>
          )
        );
      })}
      {postsData.map((post) => {
        return (
          post.status === "available" && (
            <div className="___MYfoodcard" key={post.id}>
              <FoodCardMyMealPost postData={post} setRefresh={setRefresh} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default SectionMyPosts;
