import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import LoginPage from "./components/LoginPage";
import ExpensesPage from "./components/ExpensesPage";
import RegisterPage from "./components/RegisterPage";

const App = () => {
  const [authenticated, setAuthenticated] = useState(Boolean);

  const logout = () => {
    setAuthenticated(false);
  };

  const login = () => {
    setAuthenticated(true);
  };

  return (
    <>
      <Navbar authenticated={authenticated} onLogout={logout} />
      <Banner>
        <Routes>
          <Route
            path="/"
            element={<Index authenticated={authenticated} onLogin={login} />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/login"
            element={
              <LoginPage authenticated={authenticated} onLogin={login} />
            }
          />
          <Route path="/expenses" element={<ExpensesPage />} />
        </Routes>
      </Banner>
    </>
  );
};

export default App;
