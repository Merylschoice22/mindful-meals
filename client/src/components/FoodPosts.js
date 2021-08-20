import React, { useState } from "react";
import FoodCard from "./FoodCard";
import LoadingButton from "./LoadingButton";
import "./FoodPostCard.css";
import "./ReservedPopup.css";

const FoodPosts = ({ posts, setRefresh }) => {
  //LoadMoreBtn slice end
  const [end, setEnd] = useState(3);
  const loadMore = () => {
    setEnd((prevState) => prevState + 3);
  };

  return (
    <div className="___mainfoodpostsbody">
      {posts.slice(0, end).map((postData) => (
        <div className="___foodcard" key={postData.id}>
          <FoodCard postData={postData} setRefresh={setRefresh} />
        </div>
      ))}
      <LoadingButton loadMore={loadMore} />
    </div>
  );
};

export default FoodPosts;
