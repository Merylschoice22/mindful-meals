import React from "react";
import { useState } from "react";
//import "./FoodPostCard.css";
import "../components/FoodPostCard.css";
import ReservedPopup from "../components/ReservedPopup";
//import "./ReservedPopup.css";
import "../components/ReservedPopup.css";

function ExtraFoodCardOne() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              className="post-profile-img"
              src="https://cdn.dribbble.com/users/77224/screenshots/5090693/wip_dribbble2.jpg?compress=1&resize=800x600"
              alt=""
            ></img>
            <span className="post-username">Maria Gonzales</span>
          </div>
          <div className="post-top-right">
            <span className="post-location">Eixample</span>
          </div>
        </div>
        <div className="post-center">
          <span className="post-description-title">Hey there!</span>
          <p className="post-description">
            I have a leftover cheese pizza from a party. Enough for two people
          </p>
          <img
            className="post-image"
            src="https://www.macheesmo.com/wp-content/uploads/2020/04/Homemade-Trial-Pizza-Dough-8-1008x700.jpg"
            alt="pizza"
          ></img>
        </div>
        <div className="going-bottom">
          <button
            className="going-post-food-btn"
            onClick={() => setButtonPopup(true)}
          >
            Going!
          </button>
          <ReservedPopup
            trigger={buttonPopup}
            setTrigger={setButtonPopup}
          ></ReservedPopup>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default ExtraFoodCardOne;
