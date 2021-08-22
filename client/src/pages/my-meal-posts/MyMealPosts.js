import React, { useState, useEffect } from "react";
import authAction from "../../utils/authAction";
import authFetch from "../../utils/authFetch";
import SectionMyPosts from "./SectionMyPosts";
import SectionMyPostHistory from "./SectionMyPostHistory";
import Navbar from "../../components/navbar-links/Navbar";
import "../FoodFeed.css";
const MyMealPosts = () => {
  authAction();

  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState("");
  useEffect(() => {
    authFetch("http://localhost:8080/mymealposts/")
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
      <SectionMyPosts postsData={posts} setRefresh={setRefresh} />
      <h1>My Collected Meals</h1>
      <SectionMyPostHistory postsData={posts} />
    </div>
  );
};

export default MyMealPosts;
