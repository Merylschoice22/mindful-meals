import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//import FoodPostForm from "./FoodPostForm";
import FoodCard from "./FoodCard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">Mindful Meals</div>
      {/* <FoodPostForm /> */}
      <div className="wrapper">
        <FoodCard />
        {/* Repeat with as many cards */}
      </div>
    </BrowserRouter>
  );
}

export default App;
