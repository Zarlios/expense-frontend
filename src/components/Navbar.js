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
  }, [isAuthenticated]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid" id="navbar">
          <NavLink className="navbar-brand" to="/">
            <h1>Expense Tracker</h1>
          </NavLink>
          <ul className="navbar-nav justify-content-end">
            {isAuthenticated ? (
              <>
                <NavLink className="nav-link" id="nav-link" to="/Logout">
                  Logout
                </NavLink>
              </>
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
