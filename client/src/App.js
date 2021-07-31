import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
//import FoodPostForm from "./FoodPostForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">Mindful Meals</div>
      {/* <FoodPostForm /> */}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
