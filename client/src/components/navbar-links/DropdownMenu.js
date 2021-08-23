import React, { useRef } from "react";
import { Link } from "react-router-dom";
import NavbarOutsideClick from "./NavbarOutsideClick";
import "./LinksNavbar.css";

function DropdownMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = NavbarOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>My pages</span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <div className="link-style">
            <section>
              <div className="link-style">
                <div className="links">
                  <Link to="/my-meal-posts" className="navbar-link">
                    My Meal Posts
                  </Link>
                  <Link to="/my-reserved-food" className="navbar-link">
                    My Reserved Food
                  </Link>
                  {accessToken ? (
                    <Link to="/logout" className="navbar-link">
                      Log out
                    </Link>
                  ) : null}
                </div>
              </div>
            </section>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default DropdownMenu;
