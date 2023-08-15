import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/user/userSlice";
import { loginUser } from "../features/api/authenticationService";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      loginUser(username, password).then((response) => {
        if (response.data.status === "success") {
          dispatch(login());
          navigate("/expenses");
        }
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
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
