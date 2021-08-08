import React from "react";
import "./Form.css";
const Register = () => {
  return (
    <div class="container" id="container">
      <div class="form-container sign-in-container">
        <form action="#">
          <h1>Register with us</h1>
          <label>Username</label>
          <input type="username" placeholder="Enter your username" />
          <label>Email address</label>
          <input type="email" placeholder="Email" />
          <label>Pick a password</label>
          <input type="password" placeholder="Password" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
