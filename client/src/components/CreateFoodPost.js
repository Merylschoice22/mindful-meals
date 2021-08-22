import React from "react";
import { useState } from "react";
import PopupInput from "./PopupInput";
import FoodPostForm from "./FoodPostForm";
import "./CreateFoodPost.css";

const CreateFoodPost = ({ setRefresh, refresh }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const imageHandler = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    fetch(`http://localhost:8080/new-post`, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "multipart/form-data",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        setUploadStatus(res.msg);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="make-food-post-popup">
        <div className="make-food-post-first-section">
          <div className="first-section-input">
            {/* <h3>Create Post</h3> */}
          </div>
          <br></br>
          <div className="second-section-input">
            <input
              type="text"
              placeholder="What food are you giving away?"
              onClick={togglePopup}
            />
          </div>
          <br></br>
          {isOpen && (
            <PopupInput
              content={
                <FoodPostForm setRefresh={setRefresh} refresh={refresh} />
              }
              handleClose={togglePopup}
            />
          )}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default CreateFoodPost;
