import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      props.showAlert("Logged in successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="mt-2 card mx-auto shadow-lg mb-5 bg-white rounded"
      style={{ width: "30rem" }}
    >
      <h2 className="mt-3 ms-3">Login to continue to QuickJot</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-3 mt-3 ms-3 me-4">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            value={credentials.email}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div class="mb-3 mt-3 ms-3 me-4">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            value={credentials.password}
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>
        <button type="submit" class="btn btn-success mt-1 ms-3 mb-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
