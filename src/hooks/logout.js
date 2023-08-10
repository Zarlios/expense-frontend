import { useState } from "react";
import api from "../api/api";

const Logout = () => {
  const [isLogout, setisLogout] = useState(false);
  try {
    api
      .get("/logout")
      .then((response) => {
        if (response.data === "OK") setisLogout(true);
      })
      } catch (error) {
        console.error("Error fetching authentication status:", error);
      };
      return isLogout;
};

export default Logout;
