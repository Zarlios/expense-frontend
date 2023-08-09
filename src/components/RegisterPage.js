import React from "react";
import Register from "./Register";

const App = () => {
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
          <Register />
        </div>
      </div>
    </div>
  );
};

export default App;
