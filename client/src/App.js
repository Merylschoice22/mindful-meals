import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//import FoodPostForm from "./FoodPostForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">Mindful Meals</div>
      {/* <FoodPostForm /> */}
    </BrowserRouter>
  );
}

export default App;
