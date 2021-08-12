import React from "react";
import "./ReservedPopup.css";

const ReservedPopup = () => {
  return (
    <div className="popup">
      <div className="inner-popup">
        <div className="reserve-post-information">
          <h3>We see that you are interested in this treat!</h3>
          <br></br>
          <div className="command-intro">
            <p>
              You are one step away from reserving the food! The above
              information belongs to the Food Giver and we would like to ask you
              to contact the person using the following:
            </p>
            <br></br>
          </div>
          <div className="personal-details-post-owner">
            <div>
              <p className="location-food-giver">
                Location is:
                {/* {props.postData.loc_street} */}
              </p>
              <br></br>
              <p className="phone-food-giver">
                The phone number is:
                {/* {props.postData.phone} */}
              </p>
            </div>
          </div>
          <br></br>
          <p>Click the button down below if everything sounds good for you </p>
          <br></br>
          <button className="reserved-btn">Reserved</button>
        </div>
      </div>
    </div>
  );
};
export default ReservedPopup;
