import React, { useState } from "react";
import authFetch from "../utils/authFetch";
import BtnCancelReservation from "../buttons/BtnCancelReservation";
import "./FoodCardMyReserved.css";

const FoodCardMyReserved = ({ postData, setRefresh }) => {
  const [data, setData] = useState(postData);
  const handleCancel = () => {
    authFetch(`http://localhost:8080/status-cancel-res/${postData.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        // res.json();
      })
      .then((data) => {
        setData(data);
        setRefresh(true);
      })
      .catch((error) => console.error(error));
  };
  if (!data) {
    return <h3>Loading . . .</h3>;
  }
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
            <span className="post-username">{postData.username}</span>
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

          <p className="post-description">{postData.post_date}</p>
        </div>
        <BtnCancelReservation handleClick={handleCancel} />
      </div>
      {/* </div> */}
    </div>
  );
};

export default FoodCardMyReserved;
