import React, { useState, useEffect } from "react";
import authFetch from "../utils/authFetch";
import Navbar from "../components/navbar-links/Navbar";
import CreateFoodPost from "../components/CreateFoodPost";
import FoodPosts from "../components/FoodPosts";
//import LoadingButton from "../components/LoadingButton";
import "./FoodFeed.css";
// import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";
import "../components/Footer.css";

const FoodFeed = () => {
  //Get & Set data
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    authFetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((data) => {
        console.log("this is the fetched data", data);
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, [refresh]);
  if (!posts) {
    return <h3> </h3>;
  }
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className="food-feed">
      <h1>Welcome to Mindful Meals</h1>
      <Navbar />
      {accessToken ? (
        <div>
          <CreateFoodPost setRefresh={setRefresh} refresh={refresh} />
          <FoodPosts setRefresh={setRefresh} posts={posts} />
        </div>
      ) : (
        <div>
          <h1>Please sign in so you can see the feed!</h1>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FoodFeed;
