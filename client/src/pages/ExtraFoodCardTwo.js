import React from "react";
import { useState } from "react";
import ReservedPopup from "../components/ReservedPopup";
import "../components/ReservedPopup.css";
// import "../components/FoodPostCard.css";

function ExtraFoodCardTwo() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              className="post-profile-img"
              src="https://cdn.dribbble.com/users/77224/screenshots/5422161/plant_dribbble3.png?compress=1&resize=800x600"
              alt=""
            ></img>
            <span className="post-username">Mario Totti</span>
          </div>
          <div className="post-top-right">
            <span className="post-location">La Sagrera</span>
          </div>
        </div>
        <div className="post-center">
          <span className="post-description-title">Hey there!</span>
          <p className="post-description">
            I would like to give away some blueberry muffins. There are about 20
            waiting to be shared xD
          </p>
          <img
            className="post-image"
            src="https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/b/2000/blueberry-muffins.jpg?rev=213d90493899477b8b156781c8aa06d0&vd=20200628T055650Z&hash=37CA7866D18FBD195C495824DE373751"
            alt="blueberry muffins"
          ></img>
        </div>
        <div className="going-button">
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

export default ExtraFoodCardTwo;
