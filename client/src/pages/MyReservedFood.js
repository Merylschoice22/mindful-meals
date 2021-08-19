import React, { useState, useEffect } from "react";
import MyReservedSection from "../components/MyReservedSection";
import MyCollectedSection from "../components/MyCollectedSection";
import Navbar from "../components/navbar-links/Navbar";
import "../pages/FoodFeed.css";

const MyReservedFood = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/myreservedposts/:userId`)
      //set with current logged in user ID
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);
  if (!posts) {
    return <h3>Loading . . .</h3>;
  }
  return (
    <div className="food-feed">
      <h1>My Reserved Food</h1>
      <Navbar />
      <div className="text">
        <h2>Below are all of the meals which you have reserved!</h2> <br></br>
        <h4>
          You can keep track of the meals you have reserved and easily find the
          details to collect your food. Make sure to contact the person who is
          giving the food away by the phone number they have provided in order
          to coordinate collecting it.
        </h4>
        <br></br>
        <h4>
          After reserving the food, you have 30 minutes to contact them,
          otherwise they reserve the right to release the item back to the Food
          Feed so others can reserve it.
        </h4>
      </div>
      <MyReservedSection postsData={posts} />
      <h1 className="text">Previous Meals</h1>
      <MyCollectedSection postsData={posts} />
    </div>
  );
};

export default MyReservedFood;
