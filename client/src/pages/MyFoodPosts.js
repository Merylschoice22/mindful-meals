import React, { useState, useEffect } from "react";
import FoodCardMyMealPost from "../components/FoodCardMyMealPost";

const MyFoodPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/myfoodposts/:userId")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1>My Meal Posts</h1>
      <h2>
        Below are all of the meals which you have posted to share with others
      </h2>
      <br></br>
      <h3>
        You can keep track of the ones you have posted, and when someone is
        interested, the meal card will be green and someone will contact you by
        the phone number you have provided to coordinate where to collect it.
      </h3>
      <br></br>
      <h3>
        Once they have collected the food, please click on the "Collected"
        button so that the meal transaction will be completed!
      </h3>
      <br></br>
      <h3>
        The person who reserved your meal has 30 minutes to contact you. If they
        haven't, then you can click the "Available" button again to make your
        meal visible for others to collect.
      </h3>
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
