import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

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
          <Route path="/" component={} />
          <Route path="/" component={} />
          <Route path="/" component={} />
        </Switch>
        <footer>
          <h6>Footer text</h6>
        </footer>
      </div>
    </BrowserRouter>
  ); 
}

export default App;
