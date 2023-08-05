import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../assets/stylesheet.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid" id="navbar">
          <NavLink className="navbar-brand" to="/">
            <h1>Expense Tracker</h1>
          </NavLink>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" id="nav-link" to="/index">
                Home
              </NavLink>
            </li>
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
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
