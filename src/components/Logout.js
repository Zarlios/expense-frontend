import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

const Logout = () => {
  const navigate = useNavigate();

  const [isLogout, setisLogout] = useState(false);
  useEffect(() => {
    // Make an API request to fetch the authentication status
    api
      .get("/logout")
      .then((response) => {
        if (response.data === "OK") setisLogout(true);
      })
      .catch((error) => {
        console.error("Error fetching authentication status:", error);
      });
  }, []);

  if (isLogout) navigate("/");

  return "Logged out.";
};

export default Logout;
