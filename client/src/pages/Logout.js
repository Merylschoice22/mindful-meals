import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../components/FoodPostForm.css";
import "../components/Login.css";

const Logout = () => {
  let history = useHistory();
  const logout = () => {
    localStorage.removeItem("accessToken");
    history.push("/login");
  };
  return (
    <div id="container">
      <div className="food-post-wrapper ">
        <div className="food-post-form ">
          <div className=".form-container ">
            <h1>Are you sure you want to leave?</h1>
            <button className="share-btn" onClick={logout}>
              Log out
            </button>
            <h3 className="p-header">
              <Link to="/login">Log in</Link> as a different user
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
