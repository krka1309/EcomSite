import React, { useState } from "react";
import "./Login.css";
import { EyeSlash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setError("");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/Shop");
      window.location.reload();
    } else if (username === "" && password === "") {
      alert("Error!,Username or Password field cannot be null");
    } else {
      setError("Invalid email or password");
      alert("Invalid Credentials");
    }
  };

  console.log(error);
  return (
    <form className="LoginComp">
      <span className="signuptag">LOG IN</span>
      <label className="labelText">Username</label>
      <div className="input-container">
        <input
          className="inputItem"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <label className="labelText">Password</label>
      <div className="input-container">
        <input
          className="inputItem"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <EyeSlash className="eye-icon" size={22} />
      </div>
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
      <p className="forgotPassword">fogot password?</p>
    </form>
  );
};

export default Login;
