import React, { useState } from "react";
import authFetch from "../utils/authFetch";
import BtnStatusAvailable from "../buttons/BtnStatusAvailable";
import BtnStatusCollected from "../buttons/BtnStatusCollected";
import "./FoodCardMyMealPost.css";

const FoodCardMyMealPost = ({ postData, setRefresh }) => {
  const [data, setData] = useState(postData);
  const markAvailable = () => {
    authFetch(`http://localhost:8080/status-available/${postData.id}`, {
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

  const markCollected = () => {
    authFetch(`http://localhost:8080/status-collected/${postData.id}`, {
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
  let username = data.username;
  if (!data.username) {
    username = "No one, yet";
  }

  if (!data) {
    return <h3>Loading . . .</h3>;
  }
  return (
    <div className="post">
      {/* <div className="post-wrapper"> */}
      <div className={data.status}>
        <div className="post-top">
          <div className="post-top-left">
            <img
              className="post-profile-img"
              src="https://cdn.dribbble.com/users/77224/screenshots/5601119/reading_dribbble_03.png?compress=1&resize=800x600"
              alt=""
            ></img>
            {/* //This could be the user who reserved the food */}
            <span className="post-username">Reserved by: {username}</span>
          </div>
          <div className="post-top-right"></div>
          {/* This could be a relative time for when the post was reserved */}
          {/* <p className="post-username">{data.updated_at}</p> */}
        </div>
        <div className="post-center">
          <span className="post-description-title">{data.title}</span>
          <p className="post-description">{data.description}</p>
          <div className="image-box">
            {/* Implement Multer */}
            <img
              className="post-image"
              src="https://img.delicious.com.au/Kl8Gm8gM/del/2017/05/spiced-carrot-cake-with-labneh-icing-46402-2.jpg"
              alt="Carrot cake"
            ></img>
          </div>
          <span className="post-description">
            Neighborhood: {data.loc_barrio}
          </span>
          <p className="post-description">
            Additional details of location: {data.loc_street}
          </p>
          <p className="post-description">Contact Phone number: {data.phone}</p>
          <p className="post-description">{data.post_date}</p>
        </div>
        <BtnStatusCollected handleClick={markCollected} />
        {data.status !== "available" && (
          <BtnStatusAvailable handleClick={markAvailable} />
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default FoodCardMyMealPost;
