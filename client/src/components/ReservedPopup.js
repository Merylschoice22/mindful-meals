import React from "react";
import BtnReserve from "../buttons/BtnReserve";
import "./ReservedPopup.css";

const ReservedPopup = ({ postData, setRefresh }) => {
  //Separate the Location and Phone number with a bold font and space
  // const [data, setData] = useState("");
  const markReserved = () => {
    fetch(`http://localhost:8080/status-reserved/${postData.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // setData(data);
        setRefresh(data);
      })
      .catch((error) => console.error(error));
  };
  // if (!data) {
  //   return <h3>Loading . . .</h3>;
  // }

  return (
    <div className="popup">
      <div className="inner-popup">
        <div className="reserve-post-information">
          <h3>We see that you are interested in this treat!</h3>
          <br></br>
          <div className="command-intro">
            <p>
              You are one step away from reserving your meal! The Food Giver has
              provided some more details for collecting the food including their
              phone number. Please contact them directly to arrange the pick-up.
              You will have 30 minutes after clicking Reserve to contact them:
            </p>
            <br></br>
          </div>
          <div className="personal-details-post-owner">
            <div>
              <p className="location-food-giver">
                Location is:
                {postData.loc_street}
              </p>
              <br></br>
              <p className="phone-food-giver">
                The phone number is:
                {postData.phone}
              </p>
            </div>
          </div>
          <br></br>
          <p className="click-info">
            Click the button down below if everything sounds good for you!
          </p>
          <br></br>
          <BtnReserve handleClick={markReserved} />
        </div>
      </div>
    </div>
  );
};
export default ReservedPopup;
