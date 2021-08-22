import React, { useState, useEffect } from "react";
import authFetch from "../utils/authFetch";
import Navbar from "../components/navbar-links/Navbar";
//import FoodPostCard from "../components/FoodPostCard";
import CreateFoodPost from "../components/CreateFoodPost";
import FoodPosts from "../components/FoodPosts";
//import ExtraFoodCardOne from "./ExtraFoodCardOne";
//import ExtraFoodCardTwo from "./ExtraFoodCardTwo";
//import LoadingButton from "../components/LoadingButton";
import "./FoodFeed.css";
// import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";
import "../components/Footer.css";

const FoodFeed = () => {
  //Get & Set data
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(0);
  console.log("This is posts before fetch", posts);
  useEffect(() => {
    authFetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((data) => {
        console.log("this is the fetched data", data);
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, [refresh]);
  console.log("This is the new posts after fetch", posts);
  if (!posts) {
    return <h3>Loading . . .</h3>;
  }
  return (
    <div className="food-feed">
      <h1>Welcome to Mindful Meals</h1>
      <Navbar />
      {/* Popup Input Component */}
      <CreateFoodPost setRefresh={setRefresh} refresh={refresh} />
      {/* User Food Cards */}
      {/* <FoodCard  I think we wanna delete this /> */}

      {/* <FoodPostCard />
      <ExtraFoodCardOne />
      <ExtraFoodCardTwo />
      <LoadingButton I think we wanna delete this too/> */}
      <FoodPosts setRefresh={setRefresh} posts={posts} />
      <Footer />
    </div>
  );
};

export default FoodFeed;
