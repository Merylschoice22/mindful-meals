import React, { Component } from "react";
import "./Form.css";

//const Register = () => {
export default class Register extends Component {
  constructor() {
    super();

    this.state = {
      UserName: "",
      Email: "",
      Password: "",
    };

    this.UserName = this.UserName.bind(this);
    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.register = this.register.bind(this);
  }

  UserName(event) {
    this.setState({ UserName: event.target.value });
  }
  Email(event) {
    this.setState({ Email: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }

  register(event) {
    fetch("http://localhost:8080/api/auth/signup", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName: this.state.UserName,
        Email: this.state.Email,
        Password: this.state.Password,
      }),
    })
      .then((Response) => Response.json())
      .then((Result) => {
        if (Result.Status == "Success") this.props.history.push("/Login");
        else alert("Sorry!, Unauthenticated User!");
      });
  }

  render() {
    return (
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Register with us</h1>
            <label>Username</label>
            <input
              type="username"
              onChange={this.UserName}
              placeholder="Enter your username"
            />
            <label>Email address</label>
            <input type="email" onChange={this.Email} placeholder="Email" />
            <label>Pick a password</label>
            <input
              type="password"
              onChange={this.Password}
              placeholder="Password"
            />
            <button onClick={this.register}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
