import React, { useState } from "react";
import "./Login.css";
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
    } else {
      setError("Invalid email or password");
      alert("Invalid Credentials");
    }
  };

  console.log(error);
  return (
    <form className="LoginComp">
      <label>Username</label>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
      <p className="forgotPassword">fogot password?</p>
    </form>
  );
};

export default Login;
