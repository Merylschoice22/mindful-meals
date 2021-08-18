import React from "react";
// import FoodCardMyReserved from "../components/FoodCardMyReserved";
import MyReservedSection from "../components/MyReservedSection";
import MyCollectedSection from "../components/MyCollectedSection";

const MyReservedFood = () => {
  return (
    <div>
      <h1>My Reserved Food</h1>
      <h2>Below are all of the meals which you have reserved!</h2> <br></br>
      <h4>
        You can keep track of the meals you have reserved and easily find the
        details to collect your food. Make sure to contact the person who is
        giving the food away by the phone number they have provided in order to
        coordinate collecting it.
      </h4>
      <br></br>
      <h4>
        After reserving the food, you have 30 minutes to contact them, otherwise
        they reserve the right to release the item back to the Food Feed so
        others can reserve it.
      </h4>
      <MyReservedSection />
      <h3>Past Posts</h3>
      <MyCollectedSection />
    </div>
  );
};

export default MyReservedFood;
