import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Unauth = () => {
  return (
    <div className="container" id="container">
      <div className="form-container sign-in-container">
        <form onSubmit={this.login}>
          <h1>You are not logged in!</h1>
          <h2>
            Please log in first to continue <Link to="/login">HERE.</Link>
          </h2>
          <br></br>
          <div>
            <p>Don't have an account?</p>
            <Link to="/register">Register here!</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Unauth;
