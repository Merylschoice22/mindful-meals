import React from "react";
import "./FoodCardMyReserved.css";

const FoodCardCollected = ({ postData }) => {
  return (
    <div className="post">
      {/* <div className="post-wrapper"> */}
      <div className={postData.status}>
        <div className="post-top">
          <div className="post-top-left">
            <img
              className="post-profile-img"
              src="https://cdn.dribbble.com/users/77224/screenshots/5601119/reading_dribbble_03.png?compress=1&resize=800x600"
              alt=""
            ></img>
            <span className="post-username">
              Reserved by: {postData.username}
            </span>
          </div>
          <div className="post-top-right"></div>
        </div>
        <div className="post-center">
          <span className="post-description-title">{postData.title}</span>
          <p className="post-description">{postData.description}</p>

          <div className="image-box">
            {/* Implement Multer */}
            <img
              className="post-image"
              src="https://img.delicious.com.au/Kl8Gm8gM/del/2017/05/spiced-carrot-cake-with-labneh-icing-46402-2.jpg"
              alt="Carrot cake"
            ></img>
          </div>
          <span className="post-description">
            Neighborhood: {postData.loc_barrio}
          </span>
          <p className="post-description">
            Additional details of location: {postData.loc_street}
          </p>
          <p className="post-description">
            Contact Phone number: {postData.phone}
          </p>

          <p className="post-description">{postData.post_date}Date</p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default FoodCardCollected;
