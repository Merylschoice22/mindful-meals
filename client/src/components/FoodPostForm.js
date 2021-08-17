import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./FoodPostForm.css";

class FoodPostForm extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      loc_barrio: "",
      loc_street: "",
      phone: "",
      description: "",
    };

    this.title = this.title.bind(this);
    this.loc_barrio = this.loc_barrio.bind(this);
    this.loc_street = this.loc_street.bind(this);
    this.phone = this.phone.bind(this);
    this.description = this.description.bind(this);
    this.postfood = this.postfood.bind(this);
  }

  title(event) {
    this.setState({ title: event.target.value });
  }
  loc_barrio(event) {
    this.setState({ loc_barrio: event.target.value });
  }
  loc_street(event) {
    this.setState({ loc_street: event.target.value });
  }
  phone(event) {
    this.setState({ phone: event.target.value });
  }
  description(event) {
    this.setState({ description: event.target.value });
  }

  postfood(event) {
    event.preventDefault();
    fetch("http://localhost:8080/new-post", {
      //to specify what the backend expest to receive
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        title: this.state.title,
        loc_barrio: this.state.loc_barrio,
        loc_street: this.state.loc_street,
        phone: this.state.phone,
        description: this.state.description,
      }),
    }).then((result) => {
      if (result.status == 200) this.props.history.push("/");
      else alert("Sorry!, Something went wrong!");
    });
  }

  render() {
    return (
      <div className="food-post-form">
        <div className="food-post-wrapper">
          <p>Fill out the form below to share your food</p>
          <br></br>
          <form onSubmit={this.postfood}>
            <p className="post-label">Title</p>
            <input
              className="post-input"
              type="text"
              onChange={this.title}
              placeholder="Give your post a jazzy title"
            ></input>
            <br></br>
            <p className="post-label">Barrio</p>
            <input
              className="post-input"
              type="text"
              onChange={this.loc_barrio}
              placeholder="Where can we collect the food?"
            ></input>
            <br></br>
            <p className="post-label">Street</p>
            <input
              className="post-input"
              type="text"
              onChange={this.loc_street}
              placeholder="Where can we collect the food?"
            ></input>
            <p className="post-label">Phone</p>
            <input
              className="post-input"
              type="text"
              onChange={this.phone}
              placeholder="Enter your phone number"
            ></input>
            <br></br>
            <p className="post-label">Description</p>
            <input
              className="post-input"
              type="text"
              onChange={this.description}
              placeholder="Tell us about the food that you have"
            ></input>
            <br></br>
            <button className="share-btn">Share</button>
          </form>
        </div>
{/* import React, { useRef, useState } from "react";
import ShareFoodPost from "../buttons/ShareFoodPost";
import "./FoodPostForm.css";

function FoodPostForm() {
  const [posts, setPosts] = useState([]);
  const form = useRef(null);
  const submitPost = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    fetch("http://localhost:3000/new-post", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setPosts(json);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="food-post-form">
      <div className="food-post-wrapper">
        <p className="p-header">Fill out the form below to share your food</p>
        <br></br>
        <form>
          <p className="post-label">Title</p>
          <input
            className="post-input"
            type="text"
            placeholder="Give your post a jazzy title. Ex: 'Delicious veggie salad for 2'"
          ></input>
          <br></br>
          <p className="post-label">Neighborhood</p>
          <input
            className="post-input"
            type="text"
            placeholder="What neighborhood is the food in? Ex: 'Gracia'"
          ></input>
          <br></br>
          <p className="post-label">Specific Street or Crossing</p>
          <input
            className="post-input"
            type="text"
            placeholder="Street / Cross streets / Any specific details. Ex: 'Arago con Bruc near the market'"
          ></input>
          <br></br>
          <p className="post-label">Phone</p>
          <input
            className="post-input"
            type="text"
            placeholder="Enter your phone number. Ex: 655 555 555"
          ></input>
          <br></br>
          <p className="post-label">Description</p>
          <input
            className="post-input"
            type="text"
            placeholder="Tell us about the food that you have. Ex: 'I made an extra large veggie salad and have enough to share for 2 people'"
          ></input>
          <br></br>
          <ShareFoodPost />
        </form>
      </div> */}
    );
  }
}

export default withRouter(FoodPostForm);
