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
  const [refresh, setRefresh] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, [refresh]);
  if (!posts) {
    return <h3>Loading . . .</h3>;
  }

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
