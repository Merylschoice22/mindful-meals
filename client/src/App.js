import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
// import CreateFoodPost from "./CreateFoodPost";
import FoodFeed from "./pages/FoodFeed";
import FoodPostCard from "./FoodPostCard";
import Navbar from "./Navbar";

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
          {/* <Route path="/post" component={CreateFoodPost} /> */}
          <Route path="/reserve" component={FoodPostCard} />
        </Switch>
        <footer>
          <h6>Footer text</h6>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
