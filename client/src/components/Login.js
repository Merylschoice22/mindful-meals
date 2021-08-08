import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div class="container" id="container">
      <div class="form-container sign-in-container">
        <form action="#">
          <h1>Mindful Meals</h1>
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

export default Login;
