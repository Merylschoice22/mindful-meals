import React from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import "./components/Navbar";
import "./components/Navbar.css";
import CreateFoodPost from "./components/CreateFoodPost";
import "./components/CreateFoodPost.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="header-text">
            <h4>Mindful Meals</h4>
            <h6>Tagline</h6>
          </div>
          <Navbar />
        </header>
        <Switch>
          <Route path="/" component={FoodFeed} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/navbar" component={Navbar} />
          <Route path="/post" component={CreateFoodPost} />
          {/* <Route path="/" component={} /> */}
        </Switch>
        <footer>
          <h6>Footer text</h6>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
