import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./components/api";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import Logout from "./components/Logout";
import LoginPage from "./components/LoginPage";
import ExpensesPage from "./components/ExpensesPage";
import RegisterPage from "./components/RegisterPage";
import NavbarAuth from "./components/NavbarAuth";

const App = () => {
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
  }, []);
  return (
    <>
      {isAuthenticated ? <NavbarAuth /> : <Navbar />}
      <Banner>
        <Routes>
          <Route path="/" element={<Index /> } />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage /> } />
          <Route path="/logout" element={<Logout /> } />
          <Route path ="/expenses" element={<ExpensesPage /> } />
        </Routes>
      </Banner>
    </>
  );
};

export default App;
