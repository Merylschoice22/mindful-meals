import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateFoodPost from "./components/CreateFoodPost";
import FoodFeed from "./pages/FoodFeed";
import FoodPostCard from "./components/FoodPostCard";
import MyMealPosts from "./pages/my-meal-posts/MyMealPosts";
import MyReservedFood from "./pages/MyReservedFood";
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="header-text"></div>
        </header>
        <Switch>
          <Route path="/" exact component={FoodFeed} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/post" exact component={CreateFoodPost} />
          <Route path="/reserve" exact component={FoodPostCard} />
          <Route path="/my-meal-posts" exact component={MyMealPosts} />
          <Route path="/my-reserved-food" exact component={MyReservedFood} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
