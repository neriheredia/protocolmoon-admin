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
  return <div className="container">
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" id="username" placeholder="Username" />
        <input type="password" id="password" placeholder="Password" />
        <button type="submit" className="btn">Login</button>
        <p class="message">Not registered yet?<a href="http://localhost:4000/register"> Sign in </a></p>
      </form>
    </div>
  </div>;
};

export default Login;
