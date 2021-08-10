import React, { Component } from "react";
import "./Form.css";

//const Register = () => {
export default class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.username = this.username.bind(this);
    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.register = this.register.bind(this);
  }

  username(event) {
    this.setState({ username: event.target.value });
  }
  email(event) {
    this.setState({ email: event.target.value });
  }
  password(event) {
    this.setState({ password: event.target.value });
  }

  register(event) {
    event.preventDefault();
    fetch("http://localhost:8080/api/auth/signup", {
      //to specify what the backend expest to receive
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      }),
    }).then((result) => {
      if (result.status == 200) this.props.history.push("/Login");
      else alert("Sorry!, Unauthenticated User!");
    });
  }

  render() {
    return (
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={this.register}>
            <h1>Register with us</h1>
            <label>Username</label>
            <input
              type="username"
              onChange={this.username}
              placeholder="Enter your username"
            />
            <label>Email address</label>
            <input type="email" onChange={this.email} placeholder="Email" />
            <label>Pick a password</label>
            <input
              type="password"
              onChange={this.password}
              placeholder="Password"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
