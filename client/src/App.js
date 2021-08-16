import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateFoodPost from "./components/CreateFoodPost";
import FoodFeed from "./pages/FoodFeed";
import FoodPostCard from "./components/FoodPostCard";
import MyFoodPost from "./pages/MyFoodPost";
import MyFood from "./pages/MyFood";
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
          <Route path="/myfoodpost" exact component={MyFoodPost} />
          <Route path="/myfood" exact component={MyFood} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
