import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../components/Login.css";

const Logout = () => {
  let history = useHistory();
  const logout = () => {
    localStorage.removeItem("accessToken");
    history.push("/login");
  };
  return (
    <div className="container" id="container">
      <div className="form-container sign-in-container">
        <form onSubmit={this.login}>
          <h1>Are you sure you want to leave?</h1>
          <button className="share-btn" onClick={logout}>
            Log out
          </button>
          <br></br>
          <div>
            <h2>
              <Link to="/login">LOG IN</Link> as a different user
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Logout;
