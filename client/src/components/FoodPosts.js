import React, { useState, useEffect } from "react";
// import ReservedPopup from "./ReservedPopup";
import FoodCard from "./FoodCard";
import LoadingButton from "./LoadingButton";
import "./FoodPostCard.css";
import "./ReservedPopup.css";

const FoodPosts = () => {
  //LoadMoreBtn slice end
  const [end, setEnd] = useState(3);
  const loadMore = () => {
    setEnd((prevState) => prevState + 3);
  };

  //Get & Set data
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="___mainfoodpostsbody">
      {posts.slice(0, end).map((postData, index) => (
        <div className="___foodcard" key={index}>
          <FoodCard postData={postData} />
        </div>
      ))}
      <LoadingButton loadMore={loadMore} />
    </div>
  );
};

export default FoodPosts;
