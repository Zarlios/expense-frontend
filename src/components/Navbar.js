import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/stylesheet.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";
import { logoutUser } from "../features/api/authenticationService";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const handleLogout = () => {
    logoutUser().then((response) => {
      if(response.data === "OK") dispatch(logout());
    });
  };
  console.log("Navbar: " + isAuthenticated);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid" id="navbar">
          <NavLink className="navbar-brand" to="/">
            <h1>Expense Tracker</h1>
          </NavLink>
          <ul className="navbar-nav justify-content-end">
            {isAuthenticated ? (
              <li>
                <NavLink
                  to="/"
                  className="nav-link"
                  id="nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink className="nav-link" id="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
