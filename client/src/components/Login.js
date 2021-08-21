import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };

    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.login = this.login.bind(this);
  }

  email(event) {
    this.setState({ email: event.target.value });
  }
  password(event) {
    this.setState({ password: event.target.value });
  }

  login(event) {
    event.preventDefault();
    fetch("http://localhost:8080/api/auth/signin", {
      //to specify what the backend expest to receive
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    }).then((result) => {
      if (result.status === 200) this.props.history.push("/");
      else
        alert(
          "Sorry! Something was incorrect. Please check the information you have typed and try again!"
        );
    });
  }

  render() {
    return (
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={this.login}>
            <h1>Mindful Meals</h1>
            <label>Email address</label>
            <input
              type="email"
              className="login-input"
              onChange={this.email}
              placeholder="Email"
              required
            />
            <label>Your password</label>
            <input
              className="login-input1"
              type="password"
              onChange={this.password}
              placeholder="Password"
              required
            />
            <button>Submit</button>
            <div>
              <p>Don't have an account?</p>
              <Link to="/register">Register here!</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
