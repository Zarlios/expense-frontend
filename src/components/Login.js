import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const Login = ({authenticated, onLogin}) => {
  console.log("Login:" + JSON.stringify(authenticated))
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      api.post("/login", { username, password }).then((response) => {
        if (response.data === "OK") {
          onLogin();
          navigate("/expenses");}
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Incorrect username/password");
      } else {
        setError("Registration failed. Please try again later.");
      }
    }
  };

  return (
    <>
      <div>
        {authenticated ? (
          <h1>Welcome to the Dashboard!</h1>
        ) : (
          <>
            <h1>Logged Out</h1>
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
            {error && <p style={{ color: "red" }}>{error}</p>}
          </>
        )}
      </div>
    </>
  );
};

export default Login;
