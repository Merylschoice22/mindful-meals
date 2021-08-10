import React from "react";
import { useState } from "react";
import ReservedPopup from "./ReservedPopup";
import "./FoodPostCard.css";
import "./ReservedPopup.css";

const FoodCard = ({ postData }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              className="post-profile-img"
              src="https://cdn.dribbble.com/users/77224/screenshots/5601119/reading_dribbble_03.png?compress=1&resize=800x600"
              alt=""
            ></img>
            <span className="post-username">Frida Amor</span>
          </div>
          <div className="post-top-right">
            <span className="post-location">Gracia</span>
          </div>
        </div>
        <div className="post-center">
          <span className="post-description-title">Hey there!</span>
          <p className="post-description">
            I would like to give away a vegan carrot cake that I baked this
            morning. Enough for four people
          </p>
          <div className="image-box">
            <img
              className="post-image"
              src="https://img.delicious.com.au/Kl8Gm8gM/del/2017/05/spiced-carrot-cake-with-labneh-icing-46402-2.jpg"
              alt="Carrot cake"
            ></img>
          </div>
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
};

export default FoodCard;
