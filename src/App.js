import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

import Information from "./components/Information";
import Login from "./components/Login";
import Register from "./components/Register";
import Expenses from "./components/Expenses";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div class="container-fluid" id="banner">
        <div class="text-lg-start">
          <div class="row">
            <div class="col" id="content">
              <Routes>
                <Route exact path="/login" element={<Information />} />
                <Route exact path="/register" element={<Information />} />
                <Route path="/Expenses" element={<Expenses />} />
              </Routes>
            </div>
            <div class="col">
              <div id="pic">
                <div>
                  <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/Expenses" element={<Expenses />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
