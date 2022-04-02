import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.username.value === "admin" && e.target.password.value === "admin") {
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Login Failed");
    }
  };

  return <div>
    <h1>Login</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" id="username" placeholder="Username" />
      <input type="password" id="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>;
};

export default Login;
