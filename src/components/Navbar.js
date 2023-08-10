import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/stylesheet.css";
import logout from "../hooks/logout";

import { NavLink } from "react-router-dom";

const LogoutNavLink = ({ onLogout }) => {
  const logoutVar = logout();
  const handleLogout = async () => {
    try {
      if (logoutVar) onLogout();
      else console.error("Logout failed:")
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <NavLink to="/" className="nav-link" id="nav-link" onClick={handleLogout}>
      Logout
    </NavLink>
  );
};

const Navbar = ({ authenticated, onLogout }) => {
  console.log("Navbar: " + authenticated)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid" id="navbar">
          <NavLink className="navbar-brand" to="/">
            <h1>Expense Tracker</h1>
          </NavLink>
          <ul className="navbar-nav justify-content-end">
            {authenticated ? (
              <li>
                <LogoutNavLink onLogout={onLogout} />
              </li>
            ) : (
              <>
                <li>
                  <NavLink className="nav-link" id="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
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
