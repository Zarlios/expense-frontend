import React from "react";
import api from "../features/api/api";

const RegisterPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // Handle password mismatch
      console.error("Passwords do not match");
      return;
    }

    try {
      await api.post("/users/", { username, password });
      // Redirect the user to the login page after successful registration
      window.location = "/login";
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError("Username already exists");
      } else {
        setError("Registration failed. Please try again later.");
      }
    }
  };
  return (
    <div className="container-fluid" id="banner">
      <div className="row">
        <div className="col" id="content">
          <h1>Matt's Expense Tracker!</h1>
          <h3>Please login/register an acccount</h3>
          <p>This Expense Tracker will:</p>
          <li>Add, Remove, Edit Expense</li>
          <li>Organize by category</li>
          <li>Summarize your expenses</li>
        </div>
        <div className="col">
          <div id="pic">
            <div>
              <h1>Register</h1>
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
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                />
                <br />
                <input type="submit" value="Register" />
              </form>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
