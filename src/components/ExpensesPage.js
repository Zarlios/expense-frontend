import React from "react";
import Expenses from "./Expenses";

const App = () => {
  return (
    <div className="row">
      <div className="col" id="content">
      </div>
      <div className="col">
        <div id="pic">
          <Expenses />
        </div>
      </div>
    </div>
  );
};

export default App;
