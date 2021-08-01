import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <input type="text" placeholder="Search" />
      </div>

      <section>
        <div className="menu-bar"></div>
      </section>
      <div className="navbar-right">
        <section>
          <div className="navbar-links">
            <div className="content">
              <Link to="" className="navbar-link">
                My Food Posts
              </Link>
              <Link to="" className="navbar-link">
                My Food
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
