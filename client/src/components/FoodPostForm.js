import React, { Component } from "react";
import ShareFoodPost from "../buttons/ShareFoodPost";
import { withRouter } from "react-router-dom";
import authFetch from "../utils/authFetch";
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
    this.data = [];

    authFetch("http://localhost:8080/new-post", {
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
      this.props.setRefresh(this.props.refresh + 1);
      if (result.status === 200)
        this.props.history.push("/") && this.setData(result);
      else alert("Sorry! Something went wrong!");
    });
  }

  render() {
    return (
      <div className="food-post-form">
        <div className="food-post-wrapper">
          <p className="p-header">Fill out the form below to share your food</p>
          <br></br>
          <form onSubmit={this.postfood}>
            <p className="post-label">Title</p>
            <input
              className="post-input"
              type="text"
              onChange={this.title}
              placeholder="Give your post a jazzy title. Ex: 'Delicious veggie salad for 2'"
              required
            ></input>
            <br></br>
            <p className="post-label">Neighborhood</p>
            <input
              className="post-input"
              type="text"
              onChange={this.loc_barrio}
              placeholder="What neighborhood is the food in? Ex: 'Gracia'"
              required
            ></input>
            <br></br>
            <p className="post-label">Specific Street or Crossing</p>
            <input
              className="post-input"
              type="text"
              onChange={this.loc_street}
              placeholder="Street / Cross streets / Any specific details. Ex: 'Arago con Bruc near the market'"
              required
            ></input>
            <p className="post-label">Phone</p>
            <input
              className="post-input"
              type="text"
              onChange={this.phone}
              placeholder="Enter your phone number. Ex: 655 555 555"
              required
            ></input>
            <br></br>
            <p className="post-label">Description</p>
            <input
              className="post-input"
              type="text"
              onChange={this.description}
              placeholder="Tell us about the food that you have. Ex: 'I made an extra large veggie salad and have enough to share for 2 people'"
              required
            ></input>
            <br></br>
            {this.data && <h2>Food successfully posted!</h2>}
            <ShareFoodPost />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(FoodPostForm);
