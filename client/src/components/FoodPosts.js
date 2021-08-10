import React from "react";
import { useState } from "react";
// import ReservedPopup from "./ReservedPopup";
import "./FoodPostCard.css";
import "./ReservedPopup.css";
import LoadingButton from "./LoadingButton";

const FoodPosts = () => {
  const [end, setEnd] = useState(3);
  const loadMore = () => {
    setEnd((prevState) => prevState + 3);
  };

  return (
    <div>
      <div>
        <FoodCard />
      </div>
      <LoadingButton loadMore={loadMore} />
    </div>
  );
};

export default FoodPosts;
