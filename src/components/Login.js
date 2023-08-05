import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/users/login", { username, password });
      // Redirect the user to the dashboard after successful login
      window.location = "/dashboard";
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure here (e.g., show an error message)
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
