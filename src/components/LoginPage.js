import React from "react";
import Login from "./Login";

const App = ({authenticated, onLogin}) => {
  console.log("LoginPage: " + authenticated)
  return (
    <div className="row">
      <div className="col" id="content">
        <h1>Matt's Expense Tracker!</h1>
        <h3>Please login/register an acccount</h3>
        <p>This Expense Tracker will:</p>
        <li>Add, Remove, Edit Expense</li>
        <li>Organize by category</li>
        <li>Summarize your expenses</li>
      </div>
      <div className="col">
        <div id="pic">
          <Login authenticated={authenticated} onLogin={onLogin} />
        </div>
      </div>
    </div>
  );
};

export default App;
