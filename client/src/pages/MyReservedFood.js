import React, { useState, useEffect } from "react";
import FoodCard from "../components/FoodCard";

const MyReservedFood = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/myfoodposts/:userId")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1>My Reserved Food</h1>
      <h2>Below are all of the meals which you have reserved!</h2>
      <h4>
        You can keep track of the meals you have reserved and easily find the
        contact information here. Make sure to contact the person who is giving
        the food away by the phone number they have provided to coordinate where
        to collect it.
      </h4>
      {posts.map((postData, index) => (
        <div className="___MYfoodcard" key={index}>
          {/* Make a new version of this card to reflect what the food getter should see */}
          <FoodCard postData={postData} />
        </div>
      ))}
    </div>
  );
};

export default MyReservedFood;
