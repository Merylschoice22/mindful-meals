import React from "react";
import "./Form.css";
const Register = () => {
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#F7EDE2" }}
      className="d-flex justify-content-center align-items-center"
    >
      <form className="">
        <h1 className="mb-5 text-uppercase">Register with us </h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            type="name"
            class="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            placeholder="Enter username"
          />
          <small id="nameHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn w-100 p-3 submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
