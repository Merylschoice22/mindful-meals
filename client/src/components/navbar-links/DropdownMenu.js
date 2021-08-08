import React, { useRef } from "react";
import { Link } from "react-router-dom";
import NavbarOutsideClick from "./NavbarOutsideClick";

function DropdownMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = NavbarOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>My feed</span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <div className="link-style">
            <section>
              <div className="link-style">
                <div className="links">
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
        </nav>
      </div>
    </div>
  );
}

export default DropdownMenu;
