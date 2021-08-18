import React, { useState, useEffect } from "react";
import FoodCardMyMealPost from "../components/FoodCardMyMealPost";
import Navbar from "../components/navbar-links/Navbar";
import "../pages/FoodFeed.css";
const MyFoodPosts = () => {
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
    <div className="food-feed">
      <h1>My Meal Posts</h1>
      <Navbar />
      <div className="text">
        <h2>
          Below are all of the meals and info which you have posted to share
          with others
        </h2>
        <br></br>
        <h4>
          You can keep track of the ones you have posted, and when someone is
          interested, the meal card will be green and someone will contact you
          by the phone number you have provided to coordinate where to collect
          it.
        </h4>
        <br></br>
        <h4>
          Once they have collected the food, please click on the "Collected"
          button so that the meal transaction will be completed!
        </h4>
        <br></br>
        <h4>
          The person who reserved your meal has 30 minutes to contact you. If
          they haven't, then you can click the "Available" button again to make
          your meal visible for others to collect.
        </h4>
      </div>
      {posts.map((postData, index) => (
        <div className="___MYfoodcard" key={index}>
          {/* Make a new version of this card to reflect what the food giver should see */}
          <FoodCardMyMealPost postData={postData} />
        </div>
      ))}
    </div>
  );
};

export default MyFoodPosts;
