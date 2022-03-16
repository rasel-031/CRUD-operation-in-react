import React, { useState } from "react";
import "./LoginPage.css";
import { userLoginRequest } from "../../hooks/userLoginRequest";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  //hooks write here
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  //user-defined function here
  const handleSubmit = async (event) => {
    event.preventDefault();

    const success = await userLoginRequest(user);
    if (success) {
      navigate("/dashboard");
    } else {
      alert("Login failed.");
    }
  };
  return (
    <div className="login-container">
      <h3>Login here</h3>
      <form className="login-form-container" onSubmit={handleSubmit}>
        <div className="login-form-input-box">
          <label>Email*</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            className="login-form-input-field"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div className="login-form-input-box">
          <label>Password*</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="login-form-input-field"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button className="login-form-submit-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
