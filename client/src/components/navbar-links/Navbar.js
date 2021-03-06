import React from "react";
import { Link } from "react-router-dom";
import "../navbar-links/Navbar.css";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img
            src="https://64.media.tumblr.com/865fb0d98e62d93cbd3133b1a4ec5cf0/305827feecce935f-d2/s1280x1920/b7145050ee0a932862293aab7afef8faa3096cbf.jpg"
            alt="Welcome to Mindful Meals"
            className="homepage-logo"
          />
        </Link>
      </div>
      <div className="homepage-input-search">
        <input type="text" placeholder="Search" disabled />
      </div>
      <Link to="/" className="navbar-link-login">
        Home
      </Link>
      {!accessToken ? (
        <div>
          <Link to="/register" className="navbar-link-register">
            Register
          </Link>
        </div>
      ) : null}
      {!accessToken ? (
        <div>
          <Link to="/login" className="navbar-link-login">
            Log in
          </Link>
        </div>
      ) : null}
      <DropdownMenu />
    </div>
  );
};

export default Navbar;
