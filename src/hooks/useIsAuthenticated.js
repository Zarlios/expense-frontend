import { useEffect, useState } from "react";
import api from "../api/api";

const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = async () => {
      try {
        const response = await api.get("/authStatus");
        setIsAuthenticated(response.data.isAuthenticated);
        console.log(response.data.isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
        console.error("Error fetching authentication status:", error);
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or error
      }
    };
    auth();
  }, []);

  return { isAuthenticated, isLoading, setIsAuthenticated };
};

export default useIsAuthenticated;
