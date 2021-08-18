import React, { useState, useEffect } from "react";
import FoodCardCollected from "./FoodCardCollected";
const MyCollectedSection = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/mycollectedposts/:userId")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {posts.map((postData, index) => (
        <div className="___MYfoodcard" key={index}>
          <FoodCardCollected postData={postData} />
        </div>
      ))}
    </div>
  );
};

export default MyCollectedSection;
