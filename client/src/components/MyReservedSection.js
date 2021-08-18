import React, { useState, useEffect } from "react";
import FoodCardMyReserved from "./FoodCardMyReserved";

const MyReservedSection = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/myreservedposts/:userId")
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
          <FoodCardMyReserved postData={postData} />
        </div>
      ))}
    </div>
  );
};

export default MyReservedSection;
