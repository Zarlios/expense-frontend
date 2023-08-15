import React from "react";
import { useDispatch } from "react-redux";
import ApplicationRoutes from "./routes";
import Navbar from "../components/Navbar";
import { login, logout } from "../features/user/userSlice";
import api from "../features/api/api";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    api.get("/authStatus").then((response) => {
      if (response.data && response.data.isAuthenticated) {
        dispatch(login());
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <ApplicationRoutes />
    </>
  );
};

export default App;
