import React from "react";

const Login = () => {
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#F7EDE2" }}
      className="d-flex justify-content-center align-items-center"
    >
      <form>
        <h1 className="mb-5 text-uppercase">MindFul Meals</h1>
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
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Kepp me logged in
          </label>
        </div>
        <button type="submit" className="btn w-100 mt-2 p-3 submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
