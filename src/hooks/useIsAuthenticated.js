import { useState } from "react";
import api from "../api/api";

const useIsAuthenticated = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = async () => {
    try {
      await api.get("/authStatus").then((response) => {
        setIsAuthenticated(response.data.isAuthenticated);
      });
    } catch (error) {
      setIsAuthenticated(false);
      console.error("Error fetching authentication status:", error);
    }
  };
  auth();

  return isAuthenticated;
}

export default useIsAuthenticated;
