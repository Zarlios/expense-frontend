import React from "react";
import { Route, Routes } from "react-router-dom";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import Expenses from "./components/Expenses";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path ="/expenses" element={<Expenses />} />
        </Routes>
      </Banner>
    </>
  );
};

export default App;
