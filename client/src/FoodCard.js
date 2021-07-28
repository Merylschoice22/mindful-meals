import React from "react";
import "./App.css";
//import { Link } from "react-router-dom";

function FoodCard(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className=" card-title">{props.title}</h4>
        <p className=" card-location">{props.location}</p>
        <p className="card-description">{props.description}</p>
        {/* <img src={props.img} className="card-image" /> */}
        {/*When the Food Getter clicks on Going, the following will appear */}
        <p className=" reserved card-confirmation">{props.confirmation}</p>
        <p className=" reserved card-contact-prompt">{props.contactPrompt}</p>
        <p className=" reserved card-phone">{props.phone}</p>
        <p className=" reserved card-undo-text">{props.undoText}</p>
      </div>
      <button className="card-btn-going">Going!</button>
      <button className="card-btn-reserved">Reserved</button>
    </div>
  );
}
export default FoodCard;
