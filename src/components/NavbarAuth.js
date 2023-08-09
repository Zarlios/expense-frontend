import { useEffect, useState } from "react";
import api from "./api";

import "bootstrap/dist/css/bootstrap.css";
import "../assets/stylesheet.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const auth = async () => {
      try {
        await api.get("http://localhost:5050/authStatus").then((response) => {
          setIsAuthenticated(response.data.isAuthenticated);
        });
      } catch (error) {
        console.error("Error fetching authentication status:", error);
      }
    };
    auth();
  });

  if (!isAuthenticated) {
    return null; // Return nothing if user is not authenticated
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid" id="navbar">
        <NavLink className="navbar-brand" to="/">
          <h1>Expense Tracker</h1>
        </NavLink>
        <ul className="navbar-nav justify-content-end">
          <NavLink className="nav-link" id="nav-link" to="/Logout">
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
