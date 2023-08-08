import { useEffect, useState } from "react";
import api from "./api";

const Expenses = () => {
  // Make this into a hook.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Make an API request to fetch the authentication status
    api
      .get("http://localhost:5050/authStatus")
      .then((response) => {
        setIsAuthenticated(response.data.isAuthenticated);
      })
      .catch((error) => {
        console.error("Error fetching authentication status:", error);
      });
  }, []);
  return isAuthenticated ? "A String" : "This is NOT a string";
};

export default Expenses;
